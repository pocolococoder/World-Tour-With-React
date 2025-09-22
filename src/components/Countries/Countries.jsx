import React, { use, useState } from 'react';
import Country from '../Country/Country'
import './Countries.css'


const Countries = ({countriesFetch}) => {

    const [visitedCountries,setVisitedCountries] = useState([]);

    const handleVisitedCountries=(country)=>{
        // console.log(country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }



    const countriesData = use(countriesFetch);
    const {countries} = countriesData;
    console.log(countriesData);
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>

            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <div className='card'>
                {
                    visitedCountries.map(country=><li>{country.name.common} key={country.cca3.cca3}</li>)
                }
            </div>

            <div className='card'>
                {
                    visitedCountries.map(country=><img className='image1' src={country.flags.flags.png} alt={country.flags.flags.alt} key={country.cca3.cca3}></img>)
                }
            </div>

            <div className='countries'>
                {
                countries.map(country=><Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;