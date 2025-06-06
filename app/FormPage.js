"use client";

import { useState } from "react";
import WebCard from "../components/WebCard";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    about: "",
    linkedin: "",
    github: "",
    skills: "",
    project1: "",
    project2: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  
  const username = formData.name.trim().toLowerCase().replace(/\s+/g, '');
  
  // Save properly into localStorage
  localStorage.setItem(username, JSON.stringify(formData));

  console.log("Saved data as:", username);  // Debugging line
  console.log("Data:", formData);           // Debugging line
  
  window.location.href = `/profile/${username}`;
};

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg mx-auto space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Resume to Web Card Generator
        </h1>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded-lg"
          required
        />

        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Current Role"
          className="w-full border px-4 py-2 rounded-lg"
          required
        />

        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="Short Bio/About Me"
          className="w-full border px-4 py-2 rounded-lg"
          required
        />

        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="Skills (comma-separated)"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="text"
          name="project1"
          value={formData.project1}
          onChange={handleChange}
          placeholder="Project 1 Title"
          className="w-full border px-4 py-2 rounded-lg"
          required
        />

        <input
          type="text"
          name="project2"
          value={formData.project2}
          onChange={handleChange}
          placeholder="Project 2 Title"
          className="w-full border px-4 py-2 rounded-lg"
          required
        />

        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn URL"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          type="url"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="GitHub URL"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Generate Web Card
        </button>
      </form>
    </div>
  );
}
