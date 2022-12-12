import React from 'react';
import project1 from '../../../assests/learning1.png';
import project2 from '../../../assests/learning 2.png';
import project3 from '../../../assests/learning 3.png';

const Details1 = () => {
    return (
        <div className='pt-10'>
            <h2 className='text-xl font-bold underline text-orange-600'>1.I build in this project</h2>
            <div className="card  w-full bg-base-100 shadow-xl">
                <div className='grid pt-10 lg:grid-cols-3 md:grid-cols-2 mx-14 gap-5 sm:grid-cols-1'>
                    <img src={project1} alt="Shoes" className='w-96 h-96' />
                    <img src={project2} alt="Shoes" className='w-96 h-96' />
                    <img src={project3} alt="Shoes" className='w-96 h-96' />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Learning It!</h2>
                    <ul>
                        <li>➔ Showing all Course item a page and left side bar have all course name.</li>
                        <li>➔ Press Details button are showing all course details and download pdf details.</li>
                        <li>➔ Use register and login button and checkOut the course Overview.</li>
                    </ul>
                    <div>
                        <h1 className='text-xl'>Use Technologies : </h1>
                        <ul>
                            <li>1.Html</li>
                            <li>2.Css</li>
                            <li>3.React</li>
                            <li>4.Node js</li>
                            <li>5.Firebase</li>
                            <li>6.MongoDB</li>
                        </ul>
                    </div>
                    <div className="card-actions justify-end">
                        <a href="https://learning-it-6c3ae.web.app/"><button className="btn btn-primary">See Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details1;