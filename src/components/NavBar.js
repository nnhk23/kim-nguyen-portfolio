import React from 'react'
import '../css/NavBar.css'
import logo from '../img/beige-logo.png'

export const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{"backgroundColor": "#ffffff"}}>
            <a className="navbar-brand" href="#">
                <img id="kn-logo" src={logo} alt='logo'/>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">ABOUT<span className="sr-only">(current)</span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">PROJECTS</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#">RESUME</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACTS</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
