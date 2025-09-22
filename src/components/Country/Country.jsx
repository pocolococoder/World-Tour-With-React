import React, { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries}) => {
    console.log(handleVisitedCountries)
    const [visited,setVisited]= useState(false);


    const handleVisited = ()=>{
       setVisited(visited? false : true);
       handleVisitedCountries(country);
    }


    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img className='image' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
            <p>Languages: {country.languages.languages.eng}</p>
            <p>Area: {country.area.area}  {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>

                {
                    visited ? "Visited" : "Not Visited"
                }

            </button>
        </div>
    );
};

export default Country;