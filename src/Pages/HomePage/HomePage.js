import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Allprojects from '../Projects/AllProjects/Allprojects';
import Skill from '../Skill/Skill';
import Home from './Home/Home';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skill></Skill>
            <Allprojects></Allprojects>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;