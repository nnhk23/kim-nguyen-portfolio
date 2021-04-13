import React from 'react'
import Typed from 'react-typed';
import "../css/Header.css"

export const Header = () => {
    return (
        <div className='header-wraper' id='header'>
            <div className="main-info">
                <h1 id="header-content">KIM NGUYEN</h1>
                <Typed
                    strings={['Full-stack Developer', 'Animal Enthusiast', 'First-generation Vietnamese', 'She/her', 'Plant-mom']}
                    typeSpeed={60}
                    backSpeed={60}
                    className="header-script"
                    loop
                />
            </div>
        </div>
    )
}
