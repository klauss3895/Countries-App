import React from "react";
import { Link } from "react-router-dom";
import styles from  "../estilos/Card.module.css"


export default function Card ({name,image,continent,error}){
    if (error){
        return (
            <div className={styles.container}>
                <h1>{error}</h1>
                <img className={styles.countrieImage} src="https://media.istockphoto.com/vectors/no-search-results-page-not-found-concept-vector-id1191902083" alt="image not found"  width="200px" height="200px" />
            </div>
        )
    }else{
        return (
            <div className={styles.container}>
                <li className={styles.countrieCard}>
                    <img className={styles.countrieImage} src={image} alt="img not found" width="200px" height="200px" />
                    <div className={styles.name}>{name}</div>
                    <div>{continent}</div>
                </li>
            </div>
        )
    }
    
}