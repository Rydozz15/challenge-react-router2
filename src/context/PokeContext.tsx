import { useEffect, createContext, useState } from "react";
import axios, { AxiosResponse } from "axios";

export const PokeContext = createContext({} as any);
const PokeProvider = ({ children }:React.PropsWithChildren) => {

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

};
export default PokeProvider;
