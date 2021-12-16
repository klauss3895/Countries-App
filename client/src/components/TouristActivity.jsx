import React,{useEffect, useState} from "react";
import { Link,useHistory } from "react-router-dom";
import { getCountries, postTouristActivity } from "../actions";
import {useDispatch,useSelector} from "react-redux";

import styles from "../estilos/TouristActivity.module.css"



function validate (input){
    let errors = {};
    if(input.name===""){
        errors.name = "Se requiere un nombre"
    } else if(input.countriesid===""){
        errors.countriesid = "Se requiere un id"
    } else if ( input.difficulty > 5 && input.difficulty < 0){
        errors.difficulty = "Ingrese un dato numerico entre 0 y 5"
    } else if (input.duration.length>2){
        errors.duration = "Ingrese un dato en horas"
    }
    return errors
}


export default function TouristActivityCreated(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors,setErrors]= useState({})
    const allcountries = useSelector((state)=>state.allCountries)
    const [input,setInput] = useState({
        name:"",
        countriesid:[],
        difficulty:"",
        duration:"",
        temporada:[]
        
    })


    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
    }

    function handleCheck(e){
        console.log(e.target.checked)
        if(e.target.checked){
            setInput({
                ...input,
                temporada:[...input.temporada, e.target.value]
            })
        }
        

    }
    function handleDeleteSeason(e){
        console.log(e.target.value)
        if(e.target.checked===false){
            setInput({
                    ...input,
                    temporada:input.temporada.filter(season=>season!==e.target.value)
                }) 
        }
    }

    // function handleDeleteSeason(el){

    //     setInput({
    //         ...input,
    //         temporada:input.temporada.filter(season=>season!==el)
    //     })
    // }
    function handleSelectID(e){
        console.log(e.target)
        let name = e.target.getAttribute('name')
        console.log(e.target.name)
        console.log(e.target.value)

        e.preventDefault();
        setInput({
            ...input,
            countriesid:[...input.countriesid, e.target.value]
        })
    }
    function handleDeleteCountrie(el){
        setInput({
            ...input,
            countriesid:input.countriesid.filter(id=>id!==el)
        })
    }




    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postTouristActivity(input))
        alert("Tourist Activity created!!")
        setInput({
            name:"",
            countriesid:[],
            difficulty:"",
            duration:"",
            temporada:[]
        })
        history.push("/home")
        
    }

    useEffect(()=>{
        dispatch(getCountries())
    },[])

    return (
        <div className={styles.container}>
            <Link to= "/home"><button className={styles.back}>Back to home</button></Link>
            <h1>actividad turistica</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input size="35" type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)}/>
                    {errors.name &&(<p>{errors.name}</p>)}
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input size="35" type="number" name="difficulty" value={input.difficulty} onChange={(e)=>handleChange(e)}/>
                    {errors.difficulty &&(<p>{errors.difficulty}</p>)}
                </div>
                <div>
                    <label>Duration:</label>
                    <input size="35" type="number" name="duration" value={input.duration} onChange={(e)=>handleChange(e)}/>
                    {errors.duration &&(<p>{errors.duration}</p>)}
                </div>
                    <div>
                    <label>Countries:</label>   
                <select onChange={(e)=>handleSelectID(e)}> 
                    {
                    allcountries.map(el=>(
                        <option key={el.id} name={el.name} value={el.id}>{el.name}</option>
                    ))  
                    }   
                </select>
                </div>
                <div>
                        <label>Temporada:</label>

                        <label>
                        <input  type="checkbox" name="Spring" value="Spring" onChange={(e)=>handleCheck(e)} onClick={(e)=>handleDeleteSeason(e)}/>
                        Spring
                        </label>

                        <label>
                        <input type="checkbox" name="Summer" value="Summer" onChange={(e)=>handleCheck(e)} onClick={(e)=>handleDeleteSeason(e)}/>
                        Summer
                        </label>

                        <label>
                        <input type="checkbox" name="Fall" value="Fall" onChange={(e)=>handleCheck(e)} onClick={(e)=>handleDeleteSeason(e)}/>
                        Fall
                        </label>

                        <label>
                        <input type="checkbox" name="Winter" value="Winter" onChange={(e)=>handleCheck(e)} onClick={(e)=>handleDeleteSeason(e)}/>
                        Winter
                        </label>
                </div>
                <div>
                    <button className={styles.create} type="submit">Create Tourist Activity</button>
                </div>
            </form>
            <div>
                {/* {
                allcountries.map(el=>
                    <div>
                        <p>{el.name}</p>
                    </div>
                    )
                } */}
                {   
                    input.countriesid.map(el=>
                        <div key={el}>
                        <p>{el}</p>
                        <button onClick={()=>handleDeleteCountrie(el)}>x</button>
                        </div>
                        )
                }
            </div>
            <div>
                {
                    input.temporada && input.temporada.map(el=>
                        <div key={el}>
                        <p>{el}</p>
                        {/* <button onClick={()=>handleDeleteSeason(el)}>x</button> */}
                        </div>
                        )
                }
            </div>
        </div>
    )

}