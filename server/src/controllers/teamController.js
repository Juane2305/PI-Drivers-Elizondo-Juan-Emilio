const { Team } = require("../db");
const axios = require("axios");
const URL = "http://localhost:5000/drivers";

const getTeams = async () => {
  try {
    const dbTeams = await Team.findAll();

    if (dbTeams.length > 0) {
      return dbTeams;
    }

    const apiTeams = await axios.get(URL);
    const teams = apiTeams.data.map((e) => e.teams);

    const listaTeamsPura = [];
    for (let i = 0; i < teams.length; i++) {
      if (teams[i] === undefined) {
        listaTeamsPura.push("No hay informacion de equipo");
      } else {
        let element = teams[i].split(",");
        listaTeamsPura.push(element);
      }
    }

    const listaTeams = [];
    listaTeamsPura.map((e) => {
      for (let i = 0; i < e.length; i++) {
        if(e[i].length > 1){
          listaTeams.push(e[i].trim());
        }
      }
    });
    
    const uniqueTeams = [...new Set(listaTeams)];
    
    
    // crear los teams en la base de datos

    const createdTeams = await Team.bulkCreate(
      uniqueTeams.map((name) => ({ name }))
    );

    return createdTeams;

  } catch (error) {
    throw new Error('Ocurrió un error al intentar traer los equipos');
  }
};




module.exports = {
  getTeams,
};
