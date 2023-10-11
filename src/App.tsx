import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import PokeFinder from "./views/PokeFinder";
import Navbar from './components/Navbar'

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokemon" element={<PokeFinder/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
