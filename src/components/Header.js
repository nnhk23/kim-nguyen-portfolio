import React from 'react'
import Typed from 'react-typed';
import "../css/Header.css"

export const Header = () => {
    return (
        <div className='header-wraper'>
            <div className="main-info">
                <h1 id="header-content">Hi, I'm Kim Nguyen</h1>
                <Typed
                    strings={['Full Stack Developer', 'Cat Lover', 'Vietnamese', 'She/Her']}
                    typeSpeed={60}
                    backSpeed={60}
                    className="header-script"
                    loop
                />
            </div>
        </div>
    )
}
