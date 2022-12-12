import React from 'react';
import about from '../../assests/2.jpg'

const About = () => {
    return (
        <div className='py-10'>
            <div className=" min-h-screen" style={{ backgroundImage: `url(${about})` }}>
                <div className='pt-32 mx-24'>
                    <h2 className='text-3xl underline pb-5'>About me</h2>
                    <p>I am Shopon Kumar and I love expolre to myself. <br /> I explore to lots of field. At some moments, <br /> my interest grows in the development sectore. <br /> Last 2 years i hold this sector and try to explore <br /> the fields.There were so many changes that happened to me. <br /> I completed two course in web develpoment . <br /> My passions always help me to survive.As you know <br />  how depress the sector is!When you are stuck, <br /> the code is not working and the other issues. <br /> But I never quite, I always hold and try <br /> to figure out where is the problem at last i can success.</p>
                </div>
            </div>
        </div>
    );
};

export default About;