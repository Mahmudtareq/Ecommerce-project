import React from 'react';
import HeroSection from './components/HeroSection';

const About = () => {
     const data = {
        name:'E-Commerce'
    }
    return (
        <HeroSection myData={ data} />
    );
};

export default About;