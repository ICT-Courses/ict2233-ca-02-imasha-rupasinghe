
import React from 'react';
import { FaEnvelope,FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto p-8 max-w-2xl bg-black">
      <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">Contact Me</h2>
      <div className="flex flex-col md:flex-row gap-8 bg-black rounded-lg p-8">
        <div className="flex-1">
          <h3 className='text-2xl font-semibold mb-4 text-gray-200'>Let's talk</h3>
        <p className="text-gray-300 mb-6">
          Feel free to get in touch regarding collaborations, projects, or just to say hello!
        </p>
        <div className="space-y-4 text-gray-400">
          <div className='flex-items-center'>
          <FaEnvelope className='inline-block text-pink-400 mr-3'></FaEnvelope>
          <a href="mailto:rupasingaimasha@gmail.com" className='hover:underline'>rupasinghaimasha@gmail.com</a>
        </div>
        <div className="flex-items-center">
          <FaPhone className='inline-block text-pink-400 mr-3'></FaPhone>
         <span>+94773240528 </span>
        </div>
        <div className="flex-items-center">
          <FaMapMarkedAlt className='inline-block text-pink-400 mr-3'></FaMapMarkedAlt>
          <span>Galketiya,Kalawana,Rathnapura,SriLanka</span>
        </div>
        </div>
        </div>
        <div className='flex-1'>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="mt-1 block w-full rounded-md bg-gray-900 border-gray-800 text-white focus:ring-purple-500 focus:border-purple-500" 
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="mt-1 block w-full rounded-md bg-gray-900 border-gray-800 text-white focus:ring-purple-500 focus:border-purple-500" 
              placeholder="youremail@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              className="mt-1 block w-full rounded-md bg-gray-900 border-gray-800 text-white focus:ring-purple-500 focus:border-purple-500" 
              placeholder="Your message..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
        </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">Find me on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/imasha-rupasinghe-480364346/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-200">LinkedIn</a>
            <a href="https://github.com/imasha-rupasinghe" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition-colors duration-200">GitHub</a>
            <a href="mailto:rupasinghaimasha@example.com" className="text-blue-400 hover:text-blue-500 transition-colors duration-200">Email</a>
          </div>
        </div>
      </div>
    
  );
};

export default Contact;