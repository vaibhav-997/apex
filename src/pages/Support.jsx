import React from 'react';
import Nav from './Nav';

export default function Support() {
  return (
    <div className='min-w-screen'>
   
<Nav />
        
<div className="flex flex-col items-center ">
<h1 className="text-4xl font-bold text-gray-900 mb-4">Support</h1>
<p className="text-lg text-gray-600 mb-6 max-w-2xl text-center">
  We're here to help. Fill out the form below and our team will get back to you as soon as possible.
</p>

<div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Support</h2>
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
        required 
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
        required 
      />
    </div>
    <div>
      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
      <input 
        type="text" 
        id="subject" 
        name="subject" 
        className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
        required 
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
      <textarea 
        id="message" 
        name="message" 
        rows="4" 
        className="mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
        required
      ></textarea>
    </div>
    <button 
      type="submit" 
      className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>
</div>
</div>
  );
}

