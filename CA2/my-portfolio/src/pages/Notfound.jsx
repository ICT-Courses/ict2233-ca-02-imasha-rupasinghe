import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const NotFound = () => {
  useDocumentTitle('Page Not Found');

  return (
    <section className="text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 text center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bod text-pink-500 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 mb-4">
            Page Not Found
          </h2>
          <p className='text-lg text-gray-400 mb-8 max-w-lg leading-relaxed'>
            
          </p>
          <Link to="/" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;