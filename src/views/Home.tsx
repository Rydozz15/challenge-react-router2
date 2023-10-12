import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { PokemonApiObject } from "../@types/poke";

const Home = () => {
    const  {pokemon, setPokemonUrl} = useContext(PokeContext)

    return(
        <article>
            {pokemon == null 
            ? ""
            :<section>
                <h1>Welcome Pokemon Master</h1>
                <img src={`${pokemon.sprites.other["official-artwork"]["front_default"]}`} alt="" />
                {pokemon.stats.map((element:PokemonApiObject) => (
                    <p key={element.stat.name}>{element.stat.name} : {element["base_stat"]}</p>
                ))}
            </section>}
        </article>
    );
};

export default Home;