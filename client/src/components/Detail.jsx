import React, { useEffect } from "react";
import { getDetail,filterByFavorite } from "../actions";
import { useDispatch,useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";

import styles from "../estilos/Detail.module.css"




export default function Detail(){

    const dispatch = useDispatch();
    const {id}=useParams()
    // const [favorite,setFavorite] = useState({
    //     favorite:""
    // })
    useEffect(()=>{
        dispatch(getDetail(id))
    },[id])

    // useEffect(()=>{
    //     dispatch(getCountries())
    // },[dispatch])

    // function setFavorites(){
    //     setFavorite({
    //         favorite:"favorite"
    //     })
    // }


    const allCountries = useSelector((state)=>state.countries);
    const allDetails = useSelector((state)=>state.detail);
    console.log(allDetails)
    return (
        <div>
            {
                allDetails.length > 0
                    ? <div>
                        <h1>Codigo Pais:  {allDetails[0].id}</h1>
                        <h1>Nombre:  {allDetails[0].name}</h1>
                        <img className={styles.image} src={allDetails[0].image}/>
                        <h1>Subregion:  {allDetails[0].subregion}</h1>  
                        <h1>Population:  {allDetails[0].population}</h1>
                        <h1>Continent:  {allDetails[0].continent}</h1>
                        <h1>Tourist Activity:  {allDetails[0].TouristActivities.map(el => el.name + " ")}</h1>
                        <h2>Season:  {allDetails[0].TouristActivities.map(el => el.temporada + " ")}</h2>
                        <h2>Duration:  {allDetails[0].TouristActivities.map(el => el.duration + " ")}hs</h2>
                        <h2>Difficulty:  {allDetails[0].TouristActivities.map(el => el.difficulty + " ")}</h2>
                    </div>
                    : <p>Loading...</p>
            }
            {/* <button onChange={()=>{setFavorites()}}>add to Favorites</button> */}
            <Link to="/Home">
                <button>Back to Home</button>
            </Link>
        </div>
    )

}