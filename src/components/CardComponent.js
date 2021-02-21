import React, { Component } from 'react'
import Bio from './Bio.js'
import Work from './Work.js'
import '../css/CardComponent.css'

export default class CardComponent extends Component {
    render() {
        return (
            <div className="card-wraper">
                <div id="about-me">
                    <Bio />
                </div>

                <div id='work'>
                    <Work />
                </div>
                {/* Projects */}
                {/* Resume */}
                {/* Contact Form */}
            </div>
        )
    }
}

