const { Driver } = require('../db');
const { Team } = require('../db');
const api = require('../../api/db.json');
const { Error } = require('sequelize');


// Esta función es para traer la informacion que necesitamos desde la API
 
const getDriversFromApi = () => {

    let fromApi = api.drivers.map((driver) => {

        return{
            id: driver.id,
            name: driver.name.forename,
            lastname: driver.name.surname,
            image: driver.image.url,
            nationality: driver.nationality,
            birthdate: driver.dob,
            description: driver.description
        }
    });
    return fromApi;
}


// Esta función es para traer toda la data desde la base de datos.

const getDriverFromDb= async()=> {
    let dbData= await Driver.findAll({
    include: [{
        model: Team,
        attributes: ["name"],
        through:{attributes: []},
       }],
    });

    let fromDb= dbData.map((driver)=>{
        return {
        id: driver.id,
        name: driver.name.forname,
        lastname: driver.lastname,
        image: driver.image,
        birthdate: driver.birthdate,
        nationality: driver.nationality,
        from_DB: true,
        }
    });
    return fromDb;

};


// En esta función concateno la data que traje de la API con la que traje de la DB

const getDrivers = async() => {
    let driversApi = await getDriversFromApi();
    let driversDb = await getDriverFromDb();
    let drivers = driversDb ? [...driversApi, ...driversDb] : driversApi;
    return drivers;
}


// Esta funcion va a traer la información que coincida con el id, si no coincide lanzo un error.

const getDriversById = async(id, origin) => {
    try {
        if(origin === 'db') {
            let driverDB = await Driver.findOne({
                where: {
                    id: id,
                },
                include: [{
                    model: Team,
                    attributes: ['name'],
                    through: {attributes: []}
                }]
            });

            if(driverDB) {
                return {
                    id: driverDB.id,
                    name: driverDB.name,
                    lastname: driverDB.lastname,
                    image: driverDB.image,
                    description: driverDB.description,
                    nationality: driverDB.nationality,
                    birthdate: driverDB.birthdate,
                    team: driverDB.teams
                        ? driverDB.teams.map((e) => e.name).join(', ')
                        : 'Sin equipo',
                    from_DB: true
                }
            }
        }
        else{
            let driverr = api.drivers.find(driver => driver.id === +id)
            

                let driverDetail = {
                    id: driverr.id,
                    name: driverr.name,
                    lastname: driverr.lastname,
                    image: driverr.image.url ? driverr.image.url : 'https://www.lavoz.com.ar/resizer/lePidTE_ysv402dOQqFLYBKpzBk=/1200x630/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DYGTPCSNOVHA3KG7FWE52ONF74.jpg',
                    description: driverr.description,
                    nationality: driverr.nationality,
                    birthdate: driverr.dob,
                    team: driverr.teams
                }
                return driverDetail;
            
        }


    } catch (error) {
        return {error: `The driver with id ${id} does not exist.`}
        
    }
}











module.exports = {
    getDrivers,
    getDriversById
}