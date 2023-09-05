const { getDrivers, getDriversById, getDriversByName, createNewDriver } = require('../controllers/driversController');

const getDriversHandler = async(req, res) => {
    const { name } = req.query;

    try {
        if(name){
            let result = await getDriversByName(name);
            return res.status(200).json(result);
        }
        else{
            const allDrivers = await getDrivers();
            return res.status(200).json(allDrivers)
        }
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getDriverByIdHandler = async(req, res) => {

    const { id } = req.params
    let origin = isNaN(id) ? 'db' : 'api';

    try {
        let result = await getDriversById(id, origin);

        res.status(200).json(result);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


const getDriversByNameHandler = async(req, res) => {
    const { name } = req.query;
    try {
        if(name){
            let result = await getDriversByName(name);
            
            return res.status(200).json(result);
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


const createNewDriverHandler = async(req, res) => {

    let {name, lastname, description, image, nationality, birthdate, team} = req.body;

    try {
        await createNewDriver(name, lastname, description, image, nationality, birthdate, team)
        res.status(200).send('Driver creado correctamente')
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports ={
    getDriversHandler,
    getDriverByIdHandler,
    getDriversByNameHandler,
    createNewDriverHandler
}