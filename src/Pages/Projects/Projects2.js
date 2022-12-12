import React from 'react';
import { Link } from 'react-router-dom';
import second from '../../assests/picture.jpg'

const Projects2 = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=' w-1/2'>
                    <img src={second} alt='' className=" w-full  h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 mb-10'>
                    <h1 className="mb-5 text-3xl font-bold underline ">
                        QUIZZE CRACKER</h1>
                    <div className='pb-5'>
                        <span className='text-2xl'>Use Technologies :</span>
                    </div>
                    <button className='border px-2'>Html</button>
                    <button className='border px-2 mx-3'>Css</button>
                    <button className='border px-2 mx-3'>react</button>
                    <button className='border px-2 mx-3'>Java Script</button> <br />

                    <div className='pt-5'>
                        <a className='underline text-rose-500' href="https://meek-zabaione-08e074.netlify.app/">Live Link</a>
                        <a className='underline text-rose-500 mx-3' href="https://github.com/swapon789/quize-cracker-repo">Git Client</a>
                    
                    </div>

                    <div className='pt-10'>
                       <Link to='/details2'><button className="btn btn-primary">Details Projects</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects2;