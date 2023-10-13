import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";
import pikachuImg from "../assets/imgs/landing.webp";
const Home = () => {
    const { pokemon } = useContext(PokeContext);
    const [storedPokemon, setStoredPokemon] = useState("");
    const navigate = useNavigate();
    const SendPokemon = () => {
        if (storedPokemon !== "") {
            navigate(`/pokemon/${storedPokemon.replace(/\s/g, '')}`);
        }
        else {
            alert("Write something down, please");
        }
    };
    return (<main>
            {pokemon == null
            ? ""
            : <section>
                <h1>Welcome Pokemon Master</h1>
                <img src={pikachuImg} alt="Pikachu as a Landing Page"/>
                <h3>Please, type in the pokemon's name that you want to search ✍️</h3>
                <input type="text" id="pokemon-id" onChange={(e) => { setStoredPokemon(e.target.value); }}/>
                <button onClick={SendPokemon}>Buscar...</button>
            </section>}
        </main>);
};
export default Home;
