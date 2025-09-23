import React from "react";


const About = () => {
  return (
    <section className="bg-black  text-white  py-16 ">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h1 className="text-4xl text-Center mb-12 font-bold">About Me</h1>
       <div className="flex flex-col md:flex-row items-center md:space-x-12">
      <div className="flex-1">
      <p className="text-lg mb-8">Here you can write about yourself.</p>
      </div>
    </div>
    </div>
    </section>
  );
};
export default About;
