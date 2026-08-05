import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-zinc-900 tracking-tight">404</h1>
      <h2 className="text-xl font-semibold text-zinc-800 mt-2">Page Not Found</h2>
      <p className="text-sm text-zinc-500 mt-2">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
      >
        Return to Home
      </button>
    </div>
  );
};

export default NotFound;
