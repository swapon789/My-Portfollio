import React from 'react';


const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/2330137/pexels-photo-2330137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" pt-24 ">
                    <p className='text-green-300'>....introduce</p>
                    <h1 className='text-3xl text-white'>Hi I am, <br /> <span className='text-orange-600'>SHPON KUMAR</span></h1>
                    <p className='text-white'>I am a junior web developer . <br /> I know UX/UI design and interested in learning and coding and find new technology.</p>
                    <div className='pt-4'>
                    <button className='btn btn-primary mx-4 rounded-xl bg-blue-600 '><a  href="https://drive.google.com/drive/u/0/folders/1LRCZC06hBB3UvGyG28hGuPWMq2jgMZsD">Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;