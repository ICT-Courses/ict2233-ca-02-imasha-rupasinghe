import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const NotFound = () => {
  useDocumentTitle('Page Not Found');

  return (
    <section className="page-section">
      <div className="container">
        <div className="not-found-container">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-message">
            Oops! This recipe seems to have gone missing from our kitchen! 🍳
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#7f8c8d', 
            marginBottom: '2rem',
            maxWidth: '500px',
            lineHeight: '1.6'
          }}>
            The page you're looking for doesn't exist. Maybe it got eaten by mistake? 
            Let's get you back to our delicious collection of recipes.
          </p>
          <Link to="/" className="back-home-button">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;