import { useEffect, createContext, useState } from "react";
import axios, { AxiosResponse } from "axios";

export const PokeContext = createContext({} as any);
const PokeProvider = ({ children }:React.PropsWithChildren) => {
    const [pokemon, setPokemon] = useState<AxiosResponse | null | void>(null);
    const [pokeUrl, setPokemonUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon/pikachu")

    //Fetch
    useEffect(() => {
        fetchPhotos();
      }, [pokeUrl]);
            
      const fetchPhotos = async ()=> {
        axios
          .get(pokeUrl)
          .then((response) => {
            setPokemon(response)
          })
          .catch((err) => {
            console.log("Fetch API error:", err);
          });
      };

    return (
        <PokeContext.Provider value={{ pokemon, setPokemon, pokeUrl, setPokemonUrl }}>
            {children}
        </PokeContext.Provider>
    );
};
export default PokeProvider;
