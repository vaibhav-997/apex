import React from 'react';
import Nav from './Nav';

function About() {
  return (
    <div className="flex min-w-screen flex-col min-h-screen bg-gray-50">
      <Nav />
      
      <div className="flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Opportunities</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl text-center">
          Explore exciting career opportunities with us. Join our team and be part of something great!
        </p>

        <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Open Positions</h2>
          <ul className="space-y-4">
            <li className="p-4 border rounded-lg shadow">
              <h3 className="text-xl font-bold text-indigo-600">Software Engineer</h3>
              <p className="text-gray-700">We are looking for a passionate Software Engineer to join our development team.</p>
              <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300">
                Apply Now
              </button>
            </li>
            <li className="p-4 border rounded-lg shadow">
              <h3 className="text-xl font-bold text-indigo-600">Product Designer</h3>
              <p className="text-gray-700">Join our creative team and help us design amazing user experiences.</p>
              <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300">
                Apply Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
