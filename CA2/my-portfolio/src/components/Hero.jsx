import React from 'react'
import {Link} from "react-router-dom";
import HeroImage from '../assets/imasha.jpg'

const Hero = ()=>{
    return (
        <div className='bg-black text-white text-center pt-40 md:pt-48 pb-16' >
            <img src={HeroImage} alt="imasha" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 shadow-lg'/>
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600'>
                       imasha sanjani
                </span>

            </h1>
            <p className='mt-4 text-lg text-gray-300'>i'm 

            </p>
            <div className='mt-8 space-x-4'>
                <Link to="/Contact"
                className='bg-gradient-to-r from-pink-500 to-purple-600 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with me</Link>
                <button className='bg-gradient-to-r from-pink-500 to-purple-600 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
            </div>
        </div>
    );
}
export default Hero;