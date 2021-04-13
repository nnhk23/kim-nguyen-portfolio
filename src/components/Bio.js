import React from 'react'
import resume from "../doc/KimNguyenResume.pdf"
import bioPic from "../img/EC0C04CC-7A91-4C73-8012-A2D1D59EAC9F_1_105_c.jpeg"
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

            <div data-aos="zoom-in" className='pic-wraper'>
                <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/151998780_3530881040470554_4828346437796504355_n.jpg?_nc_cat=107&ccb=3&_nc_sid=0debeb&_nc_ohc=liqsOAfoyCAAX8eu9TU&_nc_ht=scontent-sjc3-1.xx&oh=98a6497f83ebc5258982f2f38f032872&oe=605773D0" alt='pic' className="bio-pic1"/>
            
                <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/66051309_2939240586301272_5408809253957795840_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=wsZ6aB8j7ecAX8LxiLO&_nc_ht=scontent-sjc3-1.xx&oh=b542056cafcbe780c5ad6082c22752bc&oe=60567629' alt='pic' className="bio-pic1" />

                <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67276621_2954851818073482_2496730249409069056_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=GHpU-2qUCWUAX89WIx8&_nc_ht=scontent-sjc3-1.xx&oh=9f456f5026a4dcd633049bbae4afa049&oe=60566064' alt='pic' className="bio-pic1" />
            </div>

        </div>
    )
}

export default Bio

