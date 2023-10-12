import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PokeContext } from "../context/PokeContext";

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
        </div>
    )
}

export default PokeFinder;