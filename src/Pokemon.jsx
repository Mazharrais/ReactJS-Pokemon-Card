
import CardsPokemon from './CardsPokemon';
import './pokemon.css';
import React, { useEffect, useState } from 'react';

const Pokemon = () => {

  const [pokimon, setPokimon] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  //  console.log(pokimon);

   const API = "https://pokeapi.co/api/v2/pokemon?limit=224";

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
    setLoading(false)
    console.log(pokiResponse);
    

   } catch (error){
    setError(error)
    console.log(error);
    
   }
    
  }

    useEffect(()=>{
        fetchPokemon();

    },[])

    // search Functionality Added

    const searchData = pokimon.filter((curPokimon)=>{
        return(
            curPokimon.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
    })


    if(loading) {
        return(
            <div>
            <h1>loading...!</h1>
            </div>
        )
    }
    if(error){
        return(
            <div>
                <h1>Error : {error.message}</h1>
            </div>
        )
    }

  return (
    <>
      <section className='container'>
        <header>
            <h1>Let's Catch PokeMon...!</h1>
        </header>
        <div className='pokemon-search'>
            <input type="text" placeholder='search Pokemon'
             value={search} 
             onChange={(e)=>setSearch(e.target.value)} />
        </div>
        <div>
            <ul className='cards'>
                {
                   searchData.map((curPokimon,id)=>{
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
