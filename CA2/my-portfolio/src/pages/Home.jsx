import React from "react";
import Hero from "../components/Hero";
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = () => {
   useDocumentTitle('Welcome');
  return (
    
    <div className="bg-gray-900">
        <Hero/>
      
    </div>
  );
};

export default Home;
 