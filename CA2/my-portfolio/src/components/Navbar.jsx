import React from "react";
import {NavLink} from "react-router-dom";




const Navbar = ()=>{

    return(
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Imasha</div>
                
                <div className='space-x-6'>
                    <NavLink to="/" className={({isActive}) => isActive ? 'text-pink-500':'hover:text-gray-400'}> Home </NavLink>
                    <NavLink to="/About" className={({isActive}) => isActive ? 'text-pink-500':'hover:text-gray-400'}> About </NavLink>
                    <NavLink to="/Projects" className={({isActive}) => isActive ? 'text-pink-500':'hover:text-gray-400'}> Projects </NavLink>
                   <NavLink to="/Contact" className={({isActive}) => isActive ? 'text-pink-500':'hover:text-gray-400'}> Contact </NavLink>
                   
                </div>
                <button className='bg-gradient-to-r from-pink-500 to-purple-600 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect me</button>
            </div>
        
        </nav>
    

    );
};

export default Navbar;