import React from 'react';
import first from '../../../assests/dentrexa1.png'
import second from '../../../assests/dentrexa 2.png';
import third from '../../../assests/dentrexa3.png';

const Details3 = () => {
    return (
        <div className='pt-10'>
            <h2 className='text-xl font-bold underline text-orange-600'>1.I build in this project</h2>
            <div className="card  w-full bg-base-100 shadow-xl">
                <div className='grid pt-10 lg:grid-cols-3 md:grid-cols-2 mx-14 gap-5 sm:grid-cols-1'>
                    <img src={first} alt="Shoes" className='w-96 h-96' />
                    <img src={second} alt="Shoes" className='w-96 h-96' />
                    <img src={third} alt="Shoes" className='w-96 h-96' />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Learning It!</h2>
                    <ul>
                        <li>➔ Dynamicali input a service section and showing their details a different page.</li>
                        <li>➔ Register User and Login then into the access to add a service item and inpt a review in a
                            treatment.</li>
                        <li>➔ The review page ar showing some input item then user if can update or delete they can do it.</li>
                    </ul>
                    <div>
                        <h1 className='text-xl'>Use Technologies : </h1>
                        <ul>
                            <li>1.Html</li>
                            <li>2.Css</li>
                            <li>3.React</li>
                            <li>4.Node js</li>
                            <li>4.Express js</li>
                            <li>5.Firebase</li>
                            <li>6.MongoDB</li>
                            <li>6.Jwt</li>
                        </ul>
                    </div>
                    <div className="card-actions justify-end">
                        <a href="https://dentrexa-care.web.app/"><button className="btn btn-primary">See Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details3;