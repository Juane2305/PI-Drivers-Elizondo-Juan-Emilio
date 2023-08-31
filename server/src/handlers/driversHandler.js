const { getDrivers, getDriversById, getDriversByName } = require('../controllers/driversController');

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

module.exports ={
    getDriversHandler,
    getDriverByIdHandler,
    getDriversByNameHandler
}