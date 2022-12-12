import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r64q1y4', 'template_uvg4ctv', form.current, 'sAjnGvAE1WEB6f-1-')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div>
            <div className='pb-10'>
                <h1 className='text-3xl text-center'>Contact</h1>
                <p className='text-center'>Now this time contact with me in a email and text message</p>
            </div>
            <div data-theme="synthwave" className="grid max-w-screen-xl  grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contact Now!</h2>
                        <div className="dark:text-gray-400">Submit this criteria.</div>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form ref={form} onSubmit={sendEmail} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" name='from_name' type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" name='user_email' type="email" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message</label>
                        <textarea id="message" name='message' rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm border bg-blue-500 font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;