const { Router } = require('express')
const { getDriversHandler, getDriverByIdHandler, getDriversByNameHandler } = require('../handlers/driversHandler')

const driversRouter = Router();

driversRouter.get('/', getDriversHandler)
driversRouter.get('/:id', getDriverByIdHandler)
// driversRouter.post('/')



module.exports = driversRouter;