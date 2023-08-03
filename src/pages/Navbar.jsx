import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import {useCookies} from "react-cookie"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const nav=useNavigate();
    const [cookies,setCookies]=useCookies(["access_token"]);
    const Logout=()=>{
        setCookies("access_token","");
        window.localStorage.removeItem("UserId");
        nav("/");
        
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <input type="checkbox" name="" id="checkbox" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/savedrecipe'><li>Your Recipes</li></Link>
                       {!cookies.access_token ?( <Link to="/login"><li>Login/Sign Up</li></Link>):(<button className='logout' onClick={Logout}>Logout</button>)}
                    </ul>
                    <div className="logo">
                        <h3 style={{marginLeft:"5px"}}>Dish Dash</h3>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar