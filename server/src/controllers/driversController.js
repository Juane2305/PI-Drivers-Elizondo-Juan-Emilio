const { Driver } = require('../db');
const { Team } = require('../db');
const api = require('../../api/db.json');
const { Error } = require('sequelize');
const axios = require('axios')


// Esta función es para traer la informacion que necesitamos desde la API
 
const getDriversFromApi = async () => {

    let apiData = await axios('http://localhost:5000/drivers')

    let fromApi = apiData.data.map((driver) => {

        return{
            id: driver.id,
            name: driver.name.forename,
            lastname: driver.name.surname,
            image: driver.image.url,
            nationality: driver.nationality,
            birthdate: driver.dob,
            description: driver.description,
            team: driver.teams
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
        team: driver.team,
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

            let result = await axios('http://localhost:5000/drivers')
            let driverr = result.data.find(driver => driver.id === Number(id))
            

                let driverDetail = {
                    id: driverr.id,
                    name: driverr.name.forename,
                    lastname: driverr.name.surname,
                    image: driverr.image.url,
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



const getDriversByName = async(name) => {
    
    let name2 = name.toLowerCase();
    let drivers = await getDrivers();
    let resultadoNombre = drivers.filter((driver) => driver.name.toLowerCase().includes(name2))
    let resultadoApellido = drivers.filter((driver) => driver.lastname.toLowerCase().includes(name2));

    if(resultadoApellido.length > 15) {
        let sliced = resultadoApellido.slice(0,15)
        
        return sliced;
    }
    if(resultadoApellido.length < 15){
        return resultadoApellido;
    }
    
    else{
        throw new Error('No existe ningún piloto con el nombre especificado')
    }

}


// const postDriver = async(name, lastname, description, image, nationality, birthdate, team) => {
//     if(!name || !lastname || !description || !image || !nationality || !birthdate || !team){
//         throw new Error('Falta información. Complete todos los campos requeridos.')
//     }
//     else {
//         let newDriver = {
//             name: name,
//             lastname: lastname,
//             description: description,
//             image: image,
//             nationality: nationality,
//             birthdate: birthdate,
//         }
//         let 
//     }
// }






module.exports = {
    getDrivers,
    getDriversById,
    getDriversByName
}