
import './pokemon.css';
import React, { useEffect, useState } from 'react';


const FetchApi = () => {


  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchPokemon = () =>{
    fetch(API)
    .then((res) => res.json())
    .then((data) => {setApiData(data)
    setLoading(false)})
    .catch((error)=>{ 
        console.log('error', error);
        setError(error)
        console.log(false);
        
    })
  }

     useEffect(()=>{
    fetchPokemon();

     },[])
    

    console.log(apiData);
    
    if(loading)
        return(
       <div>
           <h1>loading...</h1>
       </div>
        );

        if(error)
            return(
           <div>
            <h1>Error : {error.message}</h1>
           </div>
        

        )
    
    
//   if(apiData){

 

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
            <div className='grid-three-cols'>
                <p className='pokemon-info'>
                    Height: <span>{apiData.height}</span>
                </p>
                <p className='pokemon-info'>
                    Weight: <span>{apiData.weight}</span>
                </p>
                <p className='pokemon-info'>
                    Speed: <span>{apiData.stats[5].base_stat}</span>
                </p>
            </div>
        </li>
    </ul>
    </section>
  )
}
// }


export default FetchApi;
