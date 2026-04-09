import React from 'react';
import notFound from '../../assets/error-404.png';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img
        src={notFound}
        alt="404 Not Found"
        style={{ width: '300px', height: 'auto' }}
      />

      <button className="btn btn-primary">
        <Link to="/">Go Back Home</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
