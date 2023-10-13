import { NavLink } from "react-router-dom";
import icon from "../assets/imgs/icons8-pokemon-100.png";
const Navbar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "not-active");
    return (<div className="navbar">
            <img src={icon} alt="PokeIcon" className="poke-icon"/>
            <nav>
                <NavLink className={setActiveClass} to={"/"}>Home</NavLink>
                <NavLink className={setActiveClass} to={"/pokemon"}>Pokemon</NavLink>
            </nav>
        </div>);
};
export default Navbar;
