const { getDrivers, getDriversById } = require('../controllers/driversController');

const getDriversHandler = async(req, res) => {

    try {
        const allDrivers = await getDrivers();
        res.status(200).json(allDrivers)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getDriverByIdHandler = async(req, res) => {
    const { idDriver } = req.params
    let origin = isNaN(idDriver) ? 'db' : 'api';

    try {
        let result = getDriversById(idDriver, origin);

        if(result.error) throw new Error(result.error);

        res.status(200).json(result);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports ={
    getDriversHandler,
    getDriverByIdHandler,
}