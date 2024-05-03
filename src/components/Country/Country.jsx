import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country);
    const {name, flags, area, cca3, } = country;

    const [visited, setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited);
    }

    

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'aqua' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="#" />
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)} >Mark Visited</button> <br /> <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'going'}</button>
            {visited && 'i have visited this country'}
        </div>
    );
};

export default Country;