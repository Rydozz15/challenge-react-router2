import { useEffect, createContext, useState } from "react";
import axios from "axios";
export const PokeContext = createContext({});
const PokeProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState(null);
    const [pokeUrl, setPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon/pikachu");
    //Fetch
    useEffect(() => {
        fetchPhotos();
    }, [pokeUrl]);
    const fetchPhotos = async () => {
        axios
            .get(pokeUrl)
            .then((response) => {
            setPokemon(response.data);
        })
            .catch((err) => {
            console.log("Fetch API error:", err);
            alert("Try another name, that one doesn't exist");
        });
    };
    return (<PokeContext.Provider value={{ pokemon, setPokemon, pokeUrl, setPokemonUrl }}>
            {children}
        </PokeContext.Provider>);
};
export default PokeProvider;
