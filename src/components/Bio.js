import React from 'react'
import '../css/Bio.css'

const Bio = () => {
    return (
        <div data-aos="fade-down" className="bio-wraper">
            <div className="media">
                <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/152206692_3530165700542088_953636773481511024_n.jpg?_nc_cat=108&ccb=3&_nc_sid=09cbfe&_nc_ohc=vbzj0GigSzcAX_vt4SY&_nc_ht=scontent-sjc3-1.xx&oh=cc7d90371a8e8b36ac366ebf0107f8f3&oe=60588949" className="mr-3 bio-pic" alt="bio-pic" />
                <div className="media-body">
                    <h1 className="mt-0">Looking for my work?</h1>
                    <h5>That's awesome but let's break the ice a little!</h5>
                    <p>
                        Hi, I'm Kim Nguyen. A Full Stack Software Engineer based in California, born in Vietnam, with a huge love for cats, coding and endlessly curious about the world. 
                    </p>

                    <p>
                        My healthcare and customer service background really honed my communication and collaborative skills, I strongly believe I would be a good fit in any team. I commit to write clean and testable code. I always refer to myself as a beta version: constantly updating everyday. Kindness is always the correct way to go.
                    </p>

                    <p>
                        Intrigued by traveling, hiking, photography and gaming.
                    </p>

                </div>
            </div>

            <div className='pic-wraper'>
                <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/151998780_3530881040470554_4828346437796504355_n.jpg?_nc_cat=107&ccb=3&_nc_sid=0debeb&_nc_ohc=liqsOAfoyCAAX8eu9TU&_nc_ht=scontent-sjc3-1.xx&oh=98a6497f83ebc5258982f2f38f032872&oe=605773D0" alt='pic' className="bio-pic1"/>
            
                <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/66051309_2939240586301272_5408809253957795840_n.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=wsZ6aB8j7ecAX8LxiLO&_nc_ht=scontent-sjc3-1.xx&oh=b542056cafcbe780c5ad6082c22752bc&oe=60567629' alt='pic' className="bio-pic1" />

                <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67276621_2954851818073482_2496730249409069056_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=GHpU-2qUCWUAX89WIx8&_nc_ht=scontent-sjc3-1.xx&oh=9f456f5026a4dcd633049bbae4afa049&oe=60566064' alt='pic' className="bio-pic1" />
            </div>

        </div>
    )
}

export default Bio

