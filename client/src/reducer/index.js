

const initialState = {
    countries:[],
    allCountries:[],
    detail:[]
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries:action.payload,
                allCountries:action.payload
            }
            
        case "FILTER_BY_CONTINENT":
                const allcountries= state.allCountries
                const countriesFiltered= action.payload === "All" ? allcountries : allcountries.filter(el => el.continent === action.payload)
            return {
                ...state,
                countries: countriesFiltered
            }
        case "FILTER_BY_ACTIVITY":
        return {
            ...state,
            countries: countriesFiltered
        }
        case "GET_NAME_COUNTRIES":
            return {
                ...state,
                countries:action.payload
            }
        case "POST_ACTIVITY":
            return {
                ...state
            }
        case "PUT_FAVORITE":
        return {
            ...state
        }
        case "GET_ACTIVITY":
        return {
            ...state,
            countries:action.payload
        }
        case "GET_DETAIL":
            return {
                ...state,
                detail:action.payload
            }
        case "FILTER_BY_NAME":
            let sortedArray = action.payload === "Asc" ? state.countries.sort(function (a,b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }
                return 0
            }) :
            state.countries.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1;
                }
                return 0
            })
            return {
                ...state,
                countries:sortedArray
            }

        case "FILTER_BY_POPULATION":
            let sortedArrayPopulation = action.payload === "Asc" ? state.countries.sort(function (a,b){
                if(a.population > b.population){
                    return 1;
                }
                if(b.population > a.population){
                    return -1;
                }
                return 0
            }) :
            state.countries.sort(function(a,b){
                if(a.population > b.population){
                    return -1;
                }
                if(b.population > a.population){
                    return 1;
                }
                return 0
            })
            return {
                ...state,
                countries:sortedArrayPopulation
            }
        
        default:
            return state;
    }
}

export default rootReducer;