const { Router } = require('express')
const { getDriversHandler, getDriverByIdHandler, createNewDriverHandler } = require('../handlers/driversHandler')

const driversRouter = Router();

driversRouter.get('/', getDriversHandler)
driversRouter.get('/:id', getDriverByIdHandler)
driversRouter.post('/', createNewDriverHandler)



module.exports = driversRouter;