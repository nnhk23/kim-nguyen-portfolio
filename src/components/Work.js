import React from 'react'
import hipstew from "../img/Hipstew.png"
import '../css/Work.css'

const Work = () => {
    return (
        <div data-aos="fade-right" id='work'>
            <h1 id="my-work">My Work</h1>
            <div className="container">
                <img 
                    src="https://github.com/nnhk23/makegotchi-frontend/raw/master/src/images/tamaStore.png" 
                    alt="makegotchi" 
                    className="image"/>

                <div className="overlay" id="makegotchi">
                    <div className="text">
                        <h2>Makegotchi</h2>
                        <p>
                            MAKEGOTCHI's first four letters are the initials of the 4 contributors of this app, Marisa You, Alexa Gamil, me, and Elaine Tolentino.
                        </p>
                        <p>
                            Our version of the Tamagotchi enables the user to adopt from a selection of Tamagotchis and interact with them by feeding, cleaning, tucking them into bed and the user can choose to play minigames and potentially earn or gamble coins. The coins can then be used to purchase additional pets.
                        </p>

                        <h2>Technologies</h2>

                        <p>
                            Ruby on Rails | React | React-Router | React-Bootstrap
                        </p>

                        <p>
                            <a href="https://github.com/nnhk23/makegotchi-frontend" target="_blank" rel="noreferrer" >Github </a>
                            |
                            <a href="https://youtu.be/gPxU31_ZEXc" target="_blank" rel="noreferrer" > Demo</a>
                        </p>

                    </div>
                </div>
            </div>

            <div className="container">
                <img 
                    src={hipstew} 
                    alt="hipstew" 
                    className="image"/>

                <div className="overlay" id="hipstew">
                    <div className="text">
                        <h2>Hipstew</h2>
                        <p>
                            Hipstew is built to help user look for recipes based on ingredients instead of name. You can also keep track of your fridge using a Fridge feature and also look up ingredients to add as well! There is also a chatbot, Stewy, who will assist you with conversion, recipe search or just to have a small talk with, be sure to check it out!
                        </p>

                        <h2>Technologies</h2> 

                        <p>
                            Ruby on Rails | React | React-Router | React-Bootstrap | External API | HTTP | JWT
                        </p>

                        <p>
                            <a href="https://github.com/nnhk23/hipstew_frontend" target="_blank" rel="noreferrer" >Github </a>
                            |
                            <a href="https://hipstew.herokuapp.com/" target="_blank" rel="noreferrer" > Deployed App</a>
                        </p>

                    </div>
                </div>
            </div>

            <div className="container">
                <img 
                    src="https://github.com/nnhk23/petopia-frontend/raw/main/src/images/chosen-cat.png" 
                    alt="petopia" 
                    className="image"/>

                <div className="overlay" id="petopia">
                    <div className="text">
                        <h2>Petopia</h2>
                        <p>
                            Petopia is a foster website using real pets data from shelters. You can book a date with our pets and view it on a calendar.
                        </p>

                        <h2>Technologies</h2>

                        <p>
                             Vanilla Javascript | CSS | HTML | external API
                        </p>

                        <p>
                            <a href="https://github.com/nnhk23/petopia-frontend" target="_blank" rel="noreferrer" >Github </a>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work
