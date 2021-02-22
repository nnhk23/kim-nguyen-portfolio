import React from 'react'
import '../css/ContactForm.css'

const ContactForm = () => {
    return (
        <div className="form-wraper" id='contact-form'>
            <form className="form-info">
                <h1 style={{"color" : "#f24e4ed9"}}>Contact Me</h1>
                <div className="form-group">
                    <input type="email" className="form-control customer-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control customer-input" id="exampleInputPassword1" placeholder="Your Email"/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control customer-input" id="exampleInputPassword1" placeholder="Your Subject"/>
                </div>

                <div className="form-group">
                    <textarea type="password" className="form-control customer-input" id="exampleInputPassword1" placeholder="Message" rows="3"/>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                >
                    Send Your Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm
