import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";
import { PokemonApiObject } from "../@types/poke";

const PokeFinder = () => {
    const { storedPokemon } = useParams();
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${storedPokemon}`;
    const  {setPokemonUrl,pokemon} = useContext(PokeContext)

    useEffect(() => {
        setPokemonUrl(API_URL);
      }, []);

    console.log(pokemon)
    return(
        <div>
            {pokemon == "https://pokeapi.co/api/v2/pokemon/pikachu" 
            ? ""
            :<section>
                <h1 key={pokemon.name}>{pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h1>
                <img src={`${pokemon.sprites.other["official-artwork"]["front_default"]}`} alt="" />
                <ul>
                    {pokemon.stats.map((element:PokemonApiObject) => (
                        <li key={element.stat.name}>{element.stat.name} : {element["base_stat"]}</li>
                    ))}
                    <li>type : {pokemon.types[0].type.name}</li>
                </ul>
            </section>}
        </div>
    )
}

export default PokeFinder;