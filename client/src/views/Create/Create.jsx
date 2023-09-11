import { useEffect, useState } from 'react';
import styles from './create.module.css'
import { Link } from 'react-router-dom';
import validate from './validate';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeams, createNewDriver } from '../../redux/actions';

const Create = () => {


    const dispatch = useDispatch();
    const teams = useSelector((state)=>state.allTeams)

    const [input,setInput] = useState({
        name: '',
        lastname: '',
        nationality: '',
        image: '',
        birthdate: '',
        description: '',
        team: []
    })


    const [error,setError] = useState({})

  


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        
    }


    const handleTeamChoices = (e) => {
        let { value } = e.target;
        if(input.team.includes(value)){
            return alert('Los equipos no pueden repetirse')
        }
        setInput({
            ...input,
            team:[...input.team, value]
        })
    }


    const handleDelete = (team) => {
        setInput({
            ...input,
            team: input.team.filter(el => el !== team)
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createNewDriver(input))
        console.log(input);
        alert('El piloto ha sido creado correctamente')
        setInput({
            name: '',
            lastname: '',
            nationality: '',
            image: '',
            birthdate: '',
            description: '',
            team: []
        })
    }




    useEffect(()=>{
        dispatch(getAllTeams())
    }, []);




    return (
        <div>
            <div>
                <Link to='/home'>
                    <button>Home</button>
                </Link>
            </div>
            <form>
                <div>
                    <label>Name
                        <input type='text' name='name' value={input.name} onChange={handleChange}/>
                        {error.name && <span>{error.name}</span>}
                    </label>
                </div>
                <div>
                    <label>Lastname
                        <input name='lastname' value={input.lastname} onChange={handleChange}/>
                    </label>
                    {error.lastname && <span>{error.lastname}</span>}
                </div>
                <div>
                    <label>Nationality
                        <input name='nationality' value={input.nationality} onChange={handleChange}/>
                    </label>
                    {error.nationality && <span>{error.nationality}</span>}
                </div>
                <div>
                    <label>Image
                        <input name='image' value={input.image} onChange={handleChange} placeholder='Agrega una url'/>
                    </label>
                    {error.image && <span>{error.image}</span>}
                </div>
                <div>
                    <label>Birthdate
                        <input type='date' name='birthdate' value={input.birthdate} onChange={handleChange}/>
                    </label>
                    {error.birthdate && <span>{error.birthdate}</span>}
                </div>
                <div>
                    <label>Description
                        <input name='description' value={input.description} onChange={handleChange}/>
                    </label>
                    {error.description && <span>{error.description}</span>}
                </div>
                <div>
                    <label>Teams
                        <select value={teams} onChange={(e) =>handleTeamChoices(e)}>
                            <option value="all"></option>
                            {teams.map((team)=>{
                                return(
                                    <option value={team} key={team}>
                                        {team}
                                    </option>
                                )
                            })}
                        </select>
                    </label>
                </div>

                <div>
                    <p>Equipo/s del nuevo driver</p>

                    <ul>
                        <li>{input.team.map((team)=>team + ', ')}</li>
                    </ul>
                



                    <button type='submit' onClick={handleSubmit} disabled={
                      error.name || error.lastname || error.nationality || error.image || error.birthdate || error.description || error.team
                    }>Crear piloto</button>
                </div>

            </form>
            <div>
                {input.team.map((team) => 
                    <div>
                        <p>{team}</p>
                        <button onClick={()=>handleDelete(team)}>X</button>
                    </div>
                )}
            </div>
        </div>
                    
    );
};

export default Create;