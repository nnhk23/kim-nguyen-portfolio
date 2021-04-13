import React, { Component } from 'react'
import Bio from './Bio.js'
import Work from './Work.js'
// import Skills from './Skills.js'
import ContactForm from './ContactForm.js'
import '../css/CardComponent.css'

export default class CardComponent extends Component {
    render() {
        return (
            <div className="card-wraper">
                <div>
                    <Bio />
                </div>

                <div>
                    <Work />
                </div>

                {/* <div>
                    <Skills />
                </div> */}
                
                <div>
                    <ContactForm />
                </div>
            </div>
        )
    }
}

