import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white">
    <h1 className="text-5xl font-bold text-emerald-600 mb-4">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="text-gray-700 mb-6">
      Sorry, the page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
    >
      Go Home
    </Link>
  </div>
);

export default NotFound;
