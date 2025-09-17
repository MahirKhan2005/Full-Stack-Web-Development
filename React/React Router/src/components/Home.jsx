import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to My Website
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        This is the home page built with React + Tailwind + React Router.
      </p>
      <Link
        to="/about"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Learn More
      </Link>
    </div>
  );
}

export default Home;
