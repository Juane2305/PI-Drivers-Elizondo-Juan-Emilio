import { getByDetail, resetDetail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './detail.modules.css'



const Detail = () => {

    let dispatch = useDispatch();
    let { id } = useParams();
    const driverDetail = useSelector((state)=> state.driverDetail)


    useEffect(()=>{
        dispatch(getByDetail(id))
        return () =>{
            dispatch(resetDetail())
        }
    },[])





    return (
        <div>
            <h3>ID: {driverDetail?.id}</h3>
            <h1>{driverDetail?.name} {driverDetail?.lastname}</h1>
            <h3>{driverDetail?.nationality}</h3>
            <img src={driverDetail?.image ? driverDetail.image : 'img'} alt="img" />
            <p>{driverDetail?.description}</p>
            <span>Birthdate: {driverDetail?.birthdate}</span>
            <p>Teams: {driverDetail?.team}</p>
        </div>
    );
};

export default Detail;