import React from 'react';
import { Link } from 'react-router-dom';
import first from '../../assests/learning.webp'




const Projects = () => {
    return (
        <div className='pt-10'>
            <h1 className='text-3xl text-center'>My Projects</h1>
            <p className='text-center'>Now Here my some projects and showing details press the details button</p>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=' w-1/2'>
                        <img src={first} alt='' className=" w-3/4 h-full rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2 mb-10'>
                        <h1 className="mb-5 text-3xl font-bold underline ">
                            LEARNING IT</h1>
                        <div className='pb-5'>
                            <span className='text-2xl'>Use Technologies :</span>
                        </div>
                        <button className='border px-2'>Html</button>
                        <button className='border px-2 mx-3'>Css</button>
                        <button className='border px-2 mx-3'>react</button>
                        <button className='border px-2 mx-3'>Node js</button> <br />
                        <button className='border px-2 m-3'>Firebase</button>
                        <button className='border px-2 mx-3'>Mongodb</button>
                        <button className='border px-2 mx-3'>JWT</button>

                        <div>
                            <a className='underline text-rose-500' href="https://learning-it-6c3ae.web.app/">Live Link</a>
                            <a className='underline text-rose-500 mx-3' href="https://github.com/swapon789/learning-it-client-repo">Git Client</a>
                            <a className='underline text-rose-500 mx-2' href="https://github.com/swapon789/learning-it-server-repo">Git Server</a>
                        </div>

                        <div className='pt-10'>
                            <Link to="/details1"><button className="btn btn-primary">Details Projetc</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;