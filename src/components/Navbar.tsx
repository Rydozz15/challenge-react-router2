import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    
    return (
        <div>
            <nav>
                <NavLink className={setActiveClass} to={"/"} >Home</NavLink>
                <NavLink className={setActiveClass} to={"/pokemon"} >Pokemon</NavLink>
            </nav>
        </div>
    );
}

export default Navbar