import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import '../css/ContactForm.css'

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, subject, message } = this.state

        if (!name || !email || !subject || !message){
            alert('Please Fill In All Categories!')
        } else {
            emailjs.sendForm('service_prx5jn8', 'template_vs8qnqv', e.target, 'user_LsRjkbCdo4wamcgJSINg6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    
            this.resetForm()
        }

    }

    handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

    resetForm = () => {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
    }

    render(){
        const { name, email, subject, message } = this.state;
        return (
            <div className="form-wraper" id='contact-form'>
                <form data-aos="zoom-in-down" className="form-info" onSubmit={this.handleSubmit}>
                    <h1 style={{"color" : "#f24e4ed9"}}>Contact Me</h1>
                    <h7 style={{color : 'rgb(156 165 224)'}}>Don't hesitate to contact me, let's have a talk!</h7>
                    <div className="form-group">
                        <input 
                            value={ name }
                            name="name" 
                            type="text" 
                            className="form-control customer-input" id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Your Name" 
                            onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <input value={ email } name="email" type="email" className="form-control customer-input" id="exampleInputPassword1" placeholder="Your Email" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <input value={ subject } name="subject" type="text" className="form-control customer-input" id="exampleInputPassword1" placeholder="Your Subject" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <textarea value={ message } name="message" type="text" className="form-control customer-input" id="exampleInputPassword1" placeholder="Message" rows="3" onChange={this.handleChange}/>
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
}

export default ContactForm
