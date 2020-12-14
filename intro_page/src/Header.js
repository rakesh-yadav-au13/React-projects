import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to={"/"}>WebSiteName</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/aboutUs"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
