
import CardsPokemon from './CardsPokemon';
import './pokemon.css';
import React, { useEffect, useState } from 'react';

const Pokemon = () => {

  const [pokimon, setPokimon] = useState([])
console.log(pokimon);

   const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const fetchPokemon = async() =>{
   try{
    const res = await fetch(API);
    const data = await res.json()
    console.log(data);
    const detailPoki = data.results.map(async(curPoki) => {
        const res = await fetch(curPoki.url);
        const data = await res.json();
        return data
    })

    console.log(detailPoki);

    const pokiResponse = await Promise.all(detailPoki);
    setPokimon(pokiResponse)
    console.log(pokiResponse);
    

   } catch (error){
    console.log(error);
    
   }
    
  }

    useEffect(()=>{
        fetchPokemon();

    },[])

  return (
    <>
      <section className='container'>
        <header>
            <h1>Let's Catch PokeMon...!</h1>
        </header>
        <div>
            <ul className='cards'>
                {
                   pokimon.map((curPokimon,id)=>{
                    return(

                       <CardsPokemon key={id} pokemonData={curPokimon} />
                    )
                    })
                    
                }
            </ul>
        </div>
      </section>
    </>
  )
}

export default Pokemon
