const { getTeams } = require('../controllers/teamController')


const getTeamsHandler = async(req, res) => {
    try {
        let result = await getTeams()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}


module.exports= {getTeamsHandler}