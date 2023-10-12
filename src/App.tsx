import { Routes, Route } from "react-router-dom";

import PokeProvider from "./context/PokeContext";

import Home from "./views/Home";
import PokeFinder from "./views/PokeFinder";
import Navbar from './components/Navbar'

import './App.css'

function App() {
  return (
    <div>
      <PokeProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokemon" element={<PokeFinder/>} />
        </Routes>
      </PokeProvider>
    </div>
  )
}

export default App
