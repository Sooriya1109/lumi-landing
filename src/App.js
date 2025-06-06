import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist signup:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Join the Lumi Waitlist</h1>
        <p className="mb-6 text-gray-600">Be the first to try Lumi, your daily AI friend for mental clarity.</p>

        {submitted ? (
          <p className="text-green-600 font-medium">Thank you! You’ve been added to the waitlist. ✨</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Join Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
