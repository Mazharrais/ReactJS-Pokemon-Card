
import './pokemon.css';
import React, { useEffect, useState } from 'react';


const FetchApi = () => {


  const [apiData, setApiData] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () =>{
    fetch(API)
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error)=> console.log('error', error))
  }

     useEffect(()=>{
    fetchPokemon();

     },[])
    

    console.log(apiData);
    
    
    
 if(apiData){

     return (
         <section className='container'>
    <header>
        <h1>Let's Catch Pokemon...!</h1>
    </header>
    <ul className='card-demo'>
        <li className='pokemon-card'>
            <figure>
                <img src={apiData.sprites.other.dream_world.front_default}
                alt={apiData.name}
                className='pokemon-image' />
            </figure>
            <h1>{apiData.name}</h1>
        </li>
    </ul>
    </section>
  )
}
}

export default FetchApi;
