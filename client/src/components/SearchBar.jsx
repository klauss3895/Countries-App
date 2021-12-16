import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries, getTouristActivity } from "../actions";

import styles from "../estilos/SearchBar.module.css"

export default function SearchBar (){
    const dispatch = useDispatch();
    const [name,setName] = useState("");
    const [activity,setActivity] = useState("");
    

function handleInputChangeName(e){
    e.preventDefault()
    setName(e.target.value)
}

function handleSubmitName(e){
    e.preventDefault()
    dispatch(getNameCountries(name))
}

function handleInputChangeActivity(e){
    e.preventDefault()
    setActivity(e.target.value)
}

function handleSubmitActivity(e){
    e.preventDefault()
    dispatch(getTouristActivity(activity))
}
    return (
        <div className={styles.container}>
            <div className={styles.input}>
                <input
                type="text"
                placeholder= "Search by name..."
                onChange= {(e)=> handleInputChangeName(e)}
                />
                <button type="submit" onClick={(e)=> handleSubmitName(e)} >Search</button>
            </div>
            <div className={styles.input}>
                <input
                type="text"
                placeholder= "Search by tourist activity..."
                onChange= {(e)=> handleInputChangeActivity(e)}
                />
                <button type="submit" onClick={(e)=> handleSubmitActivity(e)} >Search</button>
            </div>
        </div>
    )
    
}