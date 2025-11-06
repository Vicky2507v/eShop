import { useState } from "react";
import { CiLogin, CiShoppingCart } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    
    

    return (
        <>
            <nav className="navbar">

                <div className="navbar-logo">
                    <img src="./Images/logo.png" alt="logo"></img>
                </div>

                <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
                    {menuOpen ? <IoCloseOutline size={28} /> : <RxHamburgerMenu size={28} />}
                </div>

                <ul className={`nav-links ${menuOpen ? "active" : ""}`} >

                    <li>
                        <NavLink to="/" className="nav-item">
                            <FaHome /> <span>Home</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="nav-item" to="/registration">
                            <FaUserPlus /> <span>Registration</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="nav-item" to="/login">
                            <CiLogin /> <span>Login</span>
                        </NavLink>
                    </li>

                    <li className="dropdown" onMouseEnter={() => setCategoryOpen(true)} onMouseLeave={() => setCategoryOpen(false)}>
                        <span>
                            Categories ▾
                        </span>
                        {
                            categoryOpen && (
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/categories/tech-products">Tech Products</NavLink></li>
                                    <li><NavLink to="/categories/womans">Woman's wear</NavLink></li>
                                    <li><NavLink to="/categories/home-appliances">Home Appliances</NavLink></li>
                                    <li><NavLink to="/categories/kids">kid's wear</NavLink></li>
                                    <li><NavLink to="/categories/man">Man's wear</NavLink></li>
                                </ul>
                            )}
                    </li>

                    <li className="cart-icon">
                        <NavLink className="nav-item" to="/add-to-cart">
                            <CiShoppingCart size={24}/>
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </>
    )
}