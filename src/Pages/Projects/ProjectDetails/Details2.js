import React from 'react';
import first from '../../../assests/quize 2.png'
import second from '../../../assests/quize 3.png';
import third from '../../../assests/quize 4.png';

const Details2 = () => {
    return (
        <div className='pt-10'>
            <h1 className='text-xl underline text-orange-600'>02.I build in this project</h1>
            <div className="card  w-full bg-base-100 shadow-xl">
                <div className='grid pt-10 lg:grid-cols-3 md:grid-cols-2 mx-14 gap-5 sm:grid-cols-1'>
                    <img src={first} alt="Shoes" className='w-96 h-96' />
                    <img src={second} alt="Shoes" className='w-96 h-96' />
                    <img src={third} alt="Shoes" className='w-96 h-96' />
                </div>
                <div className="card-body">
                    <h2 className="card-title">Quize Cracker!</h2>
                    <ul>
                        <li>➔ This Simple project are view home page some Course items.</li>
                        <li>➔ All the Course item have some question and select the question ans right or wrong showing a
                            toaster.</li>
                        <li>➔ All question marks overview statistics flow.</li>
                    </ul>
                    <div>
                        <h1 className='text-xl'>Use Technologies : </h1>
                        <ul>
                            <li>1.Html</li>
                            <li>2.Css</li>
                            <li>3.React</li>
                            <li>4.Javascript</li>
                        </ul>
                    </div>
                    <div className="card-actions justify-end">
                        <a href="https://meek-zabaione-08e074.netlify.app/"><button className="btn btn-primary">See Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details2;