'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    about: '',
    skills: '',
    project1: '',
    project2: '',
    linkedin: '',
    github: '',
    username: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, ...profileData } = formData;

    if (username.trim()) {
      localStorage.setItem(username.toLowerCase(), JSON.stringify(profileData));
      router.push(`/profile/${username.toLowerCase()}`);
    } else {
      alert('Please provide a valid username.');
    }
  };

  useEffect(() => {
    const demo1 = {
      name: 'Aarav Mehta',
      role: 'Frontend Developer',
      about: 'Aarav is passionate about building beautiful user interfaces.',
      skills: 'HTML, CSS, React, Tailwind',
      project1: 'Portfolio Website',
      project2: 'Weather App',
      linkedin: 'https://linkedin.com/in/aaravdev',
      github: 'https://github.com/aaravdev',
    };

    const demo2 = {
      name: 'Ishita Sharma',
      role: 'Data Scientist',
      about: 'Ishita works with large datasets to solve real-world problems.',
      skills: 'Python, Pandas, TensorFlow, SQL',
      project1: 'Customer Churn Prediction',
      project2: 'Movie Recommendation System',
      linkedin: 'https://linkedin.com/in/ishitasharma',
      github: 'https://github.com/ishitasharma',
    };

    localStorage.setItem('aarav', JSON.stringify(demo1));
    localStorage.setItem('ishita', JSON.stringify(demo2));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-purple-100 py-10 px-4">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-auto space-y-4 transition-all duration-300"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-800">
          Resume to Web Card Generator
        </h2>

        {[
          { name: 'name', placeholder: 'Full Name' },
          { name: 'role', placeholder: 'Current Role' },
          { name: 'skills', placeholder: 'Your Skills (comma separated)' },
          { name: 'project1', placeholder: 'Project Title 1' },
          { name: 'project2', placeholder: 'Project Title 2' },
          { name: 'linkedin', placeholder: 'LinkedIn URL' },
          { name: 'github', placeholder: 'GitHub URL' },
          { name: 'username', placeholder: 'Unique Username (used in URL)' },
        ].map(({ name, placeholder }) => (
          <input
            key={name}
            name={name}
            placeholder={placeholder}
            value={formData[name]}
            onChange={handleChange}
            required={['linkedin', 'github'].includes(name) ? false : true}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        ))}

        <textarea
          name="about"
          placeholder="Short Bio/About You"
          value={formData.about}
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-md w-full hover:bg-blue-800 transition-all duration-300 font-semibold text-lg"
        >
          Generate Web Card
        </button>
      </form>

      {/* Sample Cards */}
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Sample Cards
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <Link
            href="/profile/aarav"
            className="block p-6 sm:p-8 rounded-xl shadow-lg bg-white border border-blue-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            <div>
              <h4 className="text-xl font-bold text-blue-700">Aarav Mehta</h4>
              <p className="text-gray-600 mt-1">Frontend Developer</p>
              <p className="text-sm text-blue-500 mt-3 font-medium">→ View Demo</p>
            </div>
          </Link>

          <Link
            href="/profile/ishita"
            className="block p-6 sm:p-8 rounded-xl shadow-lg bg-white border border-purple-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            <div>
              <h4 className="text-xl font-bold text-purple-700">Ishita Sharma</h4>
              <p className="text-gray-600 mt-1">Data Scientist</p>
              <p className="text-sm text-purple-500 mt-3 font-medium">→ View Demo</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
