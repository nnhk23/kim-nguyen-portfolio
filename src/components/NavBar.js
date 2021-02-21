import React, { useState } from 'react';
import '../css/NavBar.css'
import logo from '../img/beige-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY > 220){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={navbar ? "navbar active fixed-top navbar-expand-lg" : "navbar fixed-top navbar-expand-lg"}>
            <a className="navbar-brand" href="#header-content">
                <img id="kn-logo" src={logo} alt='logo'/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{"color" : "#ffffff"}} />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about-me">ABOUT<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#header-content">WORK</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#header-content">RESUME</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#header-content">CONTACTS</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
