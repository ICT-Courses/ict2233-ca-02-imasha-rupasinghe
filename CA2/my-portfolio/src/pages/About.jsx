import React from "react";


const About = () => {
  return (
    <section className="bg-black  text-white  py-16 ">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h1 className="text-4xl text-Center mb-12 font-bold">About Me</h1>
       <div className="flex flex-col md:flex-row items-center md:space-x-12">
      <div className="flex-1">
      <p className="text-lg mb-8">I'm an undergraduate student currently pursuing a BSc (Hons) in Information and Communication Technology (ICT), passionate about leveraging technology to solve real-world problems and create innovative digital experiences. With a strong foundation in both software development and IT systems, I’m continuously learning and exploring areas like web development, data science, and cybersecurity.

Throughout my academic journey, I've worked on several university projects that strengthened my skills in programming, database management, and teamwork. I enjoy learning new technologies, collaborating on tech projects, and challenging myself to grow both technically and professionally.
 
Currently exploring:
- Full-stack development 
- Cloud computing 
- UI/UX design 
- Emerging technologies like AI and blockchain

Open to internships, collaborative projects, and tech communities where I can contribute, learn, and grow.</p>
      </div>
    </div>
    </div>
    </section>
  );
};
export default About;
