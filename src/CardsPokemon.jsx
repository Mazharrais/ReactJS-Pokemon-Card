
import React from 'react'

const CardsPokemon = ({pokemonData}) => {

  return (
    
     <li className='pokemon-card'>
        <figure>
            <img src={pokemonData.sprites.other.dream_world.front_default}
             alt={pokemonData.name}
            className='pokemon-image' />
        </figure>
     </li>
    
  )
}

export default CardsPokemon;
