const { Router } = require('express')
const { getDriversHandler, getDriverByIdHandler } = require('../handlers/driversHandler')

const driversRouter = Router();

driversRouter.get('/', getDriversHandler)
driversRouter.get('/:id', getDriverByIdHandler)
// driversRouter.get('/name?="..."')
// driversRouter.post('/')



module.exports = driversRouter;