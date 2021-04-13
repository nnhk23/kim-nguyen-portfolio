import React from 'react'
import resume from "../doc/KimNguyenResume.pdf"
import bioPic from "../img/EC0C04CC-7A91-4C73-8012-A2D1D59EAC9F_1_105_c.jpeg"
import pic1 from "../img/30D0633C-7187-4269-9EA9-E65495602934_1_105_c.jpeg"
import pic2 from "../img/947A0943-0C88-4500-BA7E-3842EFABDEC3_1_105_c.jpeg"
import pic3 from "../img/F6BCA95E-F2D1-4CF7-A9D6-F12F75F42594_1_105_c.jpeg"
import '../css/Bio.css'

const Bio = () => {
    return (
        <div className="bio-wraper" id="about-me">
            <div data-aos="fade-down">
                <img src={bioPic} className="second-bio-pic" alt="bio-pic" />

                <div className="media">
                    <img src={bioPic} className="mr-3 bio-pic" alt="bio-pic" />
                    <div className="media-body">
                        <h1 className="mt-0 bio-header" style={{"color" : "#df744a"}}>Looking for my work?</h1>
                        <h6 style={{"color" : "#8fd8d2"}}>That's awesome but let's break the ice for a bit!</h6>
                        <p>
                            <h5 id='bio-content'>
                                Xin Chào, I'm Kim Nguyen. A Full Stack Software Engineer based in California, born in Vietnam, with a huge love for coding, puzzle solving and endless curiosity about the world.
                            </h5> 
                        </p>

                        <p>
                            <h5 id='bio-content'>
                                Aspire to utilize technology to help making people's life easier. Every problem has a solution, some just take a bit patience and loads of binding pry.
                            </h5>
                        </p>

                        <p>
                            <h5 id='bio-content'>
                                I'm a Grey's Anatomy, HIMYM, GoT fan, animal enthusiast, plant mom. I love playing ACNH, Splatoon, Among Us.
                            </h5>
                        </p>
                        
                        <p className='social-wraper'>
                            <a href="https://www.instagram.com/itmekimmese/" target='_blank' rel="noreferrer" className='social-media'>
                                INSTAGRAM 
                            </a>

                            <a href="https://twitter.com/kimmese_" target='_blank' rel="noreferrer" className='social-media'>
                                TWITTER 
                            </a>

                            <a href="https://dev.to/kimmese" target='_blank' rel="noreferrer" className='social-media'>
                                DEV 
                            </a>
                            <a href="https://www.linkedin.com/in/kim-nguyen-0623" target='_blank' rel="noreferrer" className='social-media'>
                                LINKEDIN 
                            </a>
                            <a href={resume} download target='_blank' rel="noreferrer" className='social-media'>
                                RESUME PDF
                            </a>

                        </p>

                    </div>
                </div>
            </div>

            {/* <div data-aos="zoom-in" className='pic-wraper'>
                <img src={pic1} alt='pic' className="bio-pic1"/>
            
                <img src={pic2} alt='pic' className="bio-pic1" />

                <img src={pic3} alt='pic' className="bio-pic1" />
            </div> */}

        </div>
    )
}

export default Bio

