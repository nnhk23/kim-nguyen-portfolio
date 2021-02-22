import React, { useState } from 'react';
import '../css/NavBar.css'
import logo from '../img/beige-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import resume from "../doc/KimNguyenResume.pdf"

export const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const [navbg, setNavbg] = useState(false);

    const changeBackground = () => {
        if(window.scrollY > 220){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const navBackground = navbg ? 'rgb(247 213 213 / 85%)': ''

    const handleClick = () => setNavbg(!navbg)

    return (
        <nav className={navbar ? "navbar active fixed-top navbar-expand-lg" : "navbar fixed-top navbar-expand-lg"}>
            <a className="navbar-brand" href="#header">
                <img id="kn-logo" src={logo} alt='logo'/>
            </a>

            <button onClick={handleClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{"color" : "#ffffff"}} />
            </button>

            <div className="collapse navbar-collapse collapse-wraper" id="navbarSupportedContent" style={{"background" : navBackground}}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#about-me">ABOUT<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#work">WORK</a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#header" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            RESUME
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a href={resume} download className='resume-file dropdown-item'>
                                Download PDF
                            </a>

                            <a href={resume} className='resume-file dropdown-item'>
                                View
                            </a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#header-content">CONTACTS</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
