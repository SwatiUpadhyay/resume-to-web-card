'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function ProfileCard() {
  const { username } = useParams();
  const router = useRouter();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (username) {
      const storedData = localStorage.getItem(username.toLowerCase());
      if (storedData) {
        setProfile(JSON.parse(storedData));
      }
    }
  }, [username]);

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
        <p className="text-lg text-gray-600 mb-4">
          Profile not found. Please check the URL or create a new card.
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  const { name, role, about, skills, project1, project2, linkedin, github } = profile;
  const skillsList = skills.split(',').map((skill) => skill.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-purple-100 p-4 sm:p-6">
      {/* Home button */}
      <div className="mb-4">
        <button
          onClick={() => router.push('/')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Home
        </button>
      </div>

      {/* Card */}
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 text-center space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-blue-800">{name}</h1>
        <h2 className="text-xl font-semibold text-gray-700">{role}</h2>
        <p className="text-gray-600">{about}</p>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsList.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
          <ul className="text-gray-600 space-y-1">
            <li>🔹 {project1}</li>
            <li>🔹 {project2}</li>
          </ul>
        </div>

        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-medium underline hover:text-blue-900"
            >
              LinkedIn
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-medium underline hover:text-black"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

