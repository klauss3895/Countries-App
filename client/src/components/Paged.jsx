import React from "react";
import "../estilos/Paged.module.css"


export default function Paged({countriesPerPage,allCountries,paged}){
    const pageNumber=[];

    for(let i=0; i<Math.ceil(allCountries/countriesPerPage);i++){
        pageNumber.push(i+1)
    }

    return (
        <nav>
            <ul>
                { pageNumber &&
                    pageNumber.map(number=>(
                        <li  key={number}>
                        <a onClick={()=>paged(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}