import axios from "axios";

export function getCountries(){
    return async function (dispatch){
        var info = await axios.get("http://localhost:3001/countries");
        console.log(info)

        return dispatch({
            type:"GET_COUNTRIES",
            payload: info.data
        })
    }
}    
export function filterCountriesByContinent(payload){
    return {
        type:"FILTER_BY_CONTINENT",
        payload
    }
}
export function filterCountriesByActivity(payload){
    return {
        type:"FILTER_BY_ACTIVITY",
        payload
    }
}

export function getNameCountries(name){
    return async function(dispatch){
        try{
            var info = await axios.get(`http://localhost:3001/byName?name=${name}`);
            return dispatch({
                type:"GET_NAME_COUNTRIES",
                payload:info.data
            })
        }
        catch(error){
            console.log(error)
        }
    }
}

export function filterByFavorite(){}



export function getTouristActivity(activity){
    return async function(dispatch){
        try{
            var info = await axios.get(`http://localhost:3001/byName/activity?activity=${activity}`);
            return dispatch({
                type:"GET_ACTIVITY",
                payload:info.data
            })
        }
        catch(error){
            console.log(error)
        }
    }
}

export function putFavorite(codigo,payload){
    return async function(dispatch){
        const response = await axios.put(`http://localhost:3001/favorite/put/${codigo}`,payload);
        console.log(response)
        console.log(payload)
        console.log(codigo)
        return response;
    }
}

export function postTouristActivity(payload){
    return async function (dispatch){
        const  response = await axios.post("http://localhost:3001/activity/post",payload);
        console.log(response)
        console.log(payload)
        return response;
    }
}
export function getDetail(id){
    return async function(dispatch){
        try{
            var info = await axios.get(`http://localhost:3001/countries/${id}`);
            console.log(info)
            return dispatch({
                type:"GET_DETAIL",
                payload:info.data
            })
        }
        catch(error){
            console.log(error)
        }
    }
}

export function orderByName(payload){
    return {
        type:"FILTER_BY_NAME",
        payload
    }
}

export function orderByPopulation(payload){
    return {
        type:"FILTER_BY_POPULATION",
        payload
    }
}

