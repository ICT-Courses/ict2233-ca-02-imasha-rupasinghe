import React from "react";
import AboutImage from '../assets/Aboutimage.jpg';
import { useDocumentTitle } from '../hooks/useDocumentTitle';


const About = () => {
   useDocumentTitle('About Me');
  return (
    <section className="bg-black  text-white  py-16 ">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
     <h2 className="text-3xl font-bold text-center mb-6 text-pink-500">About Me</h2>
       <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <img src={AboutImage} alt="" className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
      <div className="flex-1">
      <p className="text-lg mb-8">I'm  passionate about leveraging technology to solve real-world problems and create innovative digital experiences. With a strong foundation in both software development and IT systems, I’m continuously learning and exploring areas like web development, data science, and cybersecurity.

Throughout my academic journey, I've worked on several university projects that strengthened my skills in programming, database management, and teamwork. I enjoy learning new technologies, collaborating on tech projects, and challenging myself to grow both technically and professionally.
 <br/>
Currently exploring:
<br/>- Full-stack development
<br/>- Cloud computing 
<br/>- UI/UX design 
<br/>- Emerging technologies like AI and blockchain
<br/>
Open to internships, collaborative projects, and tech communities where I can contribute, learn, and grow.</p>
<div className="space-y-4">
  <div className="flex items-center">
    <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-pink-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
    </div>
  </div>
   <div className="flex items-center">
    <label htmlFor="htmlandcss" className="w-2/12">PYTHON</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-pink-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="htmlandcss" className="w-2/12">C#</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-pink-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="htmlandcss" className="w-2/12">JAVA SCRIPT</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-pink-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
    </div>
  </div>

  <div className="flex items-center">
    <label htmlFor="htmlandcss" className="w-2/12">REACT</label>
    <div className="grow bg-gray-800 rounded-full h-2.5">
      <div className="bg-gradient-to-r from-pink-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
    </div>
  </div>

</div>
      </div>
    </div>
    </div>
    </section>
  );
};
export default About;
