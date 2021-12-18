import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getCountries, filterCountriesByContinent, orderByName, orderByPopulation } from "../actions";
import {Link} from "react-router-dom";

import Card from "../components/Card";
import Paged from "./Paged";
import SearchBar from "./SearchBar";

import styles from  "../estilos/Card.module.css"
import stylehome from "../estilos/Home.module.css"

export default function Home (){
    const dispatch = useDispatch();
    const allCountries = useSelector((state)=>state.countries);
    const [currentPage,setCurrentPage]=useState(1);
    const [countriesPerPage,setCountriesPerPage]=useState(10);
    const indexOfLastCountries = currentPage * countriesPerPage;
    const indexOfFirstCountries = indexOfLastCountries - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountries,indexOfLastCountries);
    const [order,setOrder] = useState("");
    const paged = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    function handleSortName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }
    function handleSortPopulation(e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }
    function handleFilterContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
    }

    return (
        <div >
            <h1>Countries App</h1>
            <div>

                <div className={stylehome.search}>
                        <select onChange={(e)=>handleSortName(e)}>
                            <option value="Asc">Upward</option>
                            <option value="Desc">Falling</option>
                        </select>
                        <select onChange={(e)=>handleSortPopulation(e)}>
                            <option value="Asc">smaller population</option>
                            <option value="Desc">higher population</option>
                        </select>
                        <select onChange={(e)=>handleFilterContinent(e)}>
                            <option value="Oceania">Oceania</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Europe">Europe</option>
                            <option value="Americas">Americas</option>
                            <option value="Antarctic">Antarctic</option>
                        </select>
                        <button onClick={(e)=>{handleClick(e)}}>Countries</button>
                    <SearchBar className={styles.searchBar} />
                </div>
            <Link  className={styles.create} to= "/TouristActivity"><button>Create Tourist Activity</button></Link>

                <Paged
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paged={paged}
                />
                {
                   currentCountries && currentCountries.map(el =>{
                        return(
                            <ul className={styles.countriesGrid} >
                                {
                                <Link to={"/detail/" + el.id}>
                                    <Card error={el.error} name={el.name} image={el.image} continent={el.continent} key={el.id} />
                                </Link>
                                }
                            </ul>
                        )
                        
                    })
                }                

            </div>
        </div>
    )
}