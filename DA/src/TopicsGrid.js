import React, { useState } from "react";
import { Link } from "react-router-dom";

const topics = [
  {
    id: 1,
    title: "React Basics",
    subjects: ["Introduction", "JSX", "Components"],
    thumbnail:
      "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg",
  },
  {
    id: 2,
    title: "Node.js Fundamentals",
    subjects: ["Server Setup", "Express.js", "Routing"],
    thumbnail:
      "https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg",
  },
  {
    id: 3,
    title: "CSS Styling",
    subjects: ["Flexbox", "Grid", "Animations"],
    thumbnail:
      "https://coreldrawdesign.com/resources/previews/preview-versus-youtube-thumbnail-blue-red-comic-style-creative-1713014070.jpg",
  },
  {
    id: 4,
    title: "CSS Styling",
    subjects: ["Flexbox", "Grid", "Animations"],
    thumbnail:
      "https://coreldrawdesign.com/resources/previews/preview-versus-youtube-thumbnail-blue-red-comic-style-creative-1713014070.jpg",
  },
  {
    id: 5,
    title: "CSS Styling",
    subjects: ["Flexbox", "Grid", "Animations"],
    thumbnail:
      "https://coreldrawdesign.com/resources/previews/preview-versus-youtube-thumbnail-blue-red-comic-style-creative-1713014070.jpg",
  },
  {
    id: 6,
    title: "CSS Styling",
    subjects: ["Flexbox", "Grid", "Animations"],
    thumbnail:
      "https://coreldrawdesign.com/resources/previews/preview-versus-youtube-thumbnail-blue-red-comic-style-creative-1713014070.jpg",
  },
];

function TopicsGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Assuming categories based on topic titles
  const categories = Array.from(new Set(topics.map((topic) => topic.title)));

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(topic.title))
  );

  const handleCategorySelect = (category) => {
    setSelectedCategories((prev) => [...prev, category]);
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Courses</h1>

      {/* Search Input */}
      {/* Search Input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search topics..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
        />
      </div>

      {/* Category Filters */}
      <div className="flex overflow-x-auto mb-4">
        {categories.map((category) => (
          <div
            key={category}
            className="flex items-center mr-2 mb-2 p-1 whitespace-nowrap border border-gray-200 rounded-lg shadow-sm transition duration-200 ease-in-out hover:shadow-md"
          >
            <button
              onClick={() => handleCategorySelect(category)}
              className={`text-black px-4 py-2 bg-white hover:bg-gray-100 transition duration-200 ease-in-out rounded-l-lg ${
                selectedCategories.includes(category)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={selectedCategories.includes(category)}
            >
              {category}
            </button>
            {selectedCategories.includes(category) && (
              <button
                onClick={() => removeCategory(category)}
                className="text-black text-xl"
                aria-label="Remove category"
              >
                &times; {/* Cross button */}
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filteredTopics.map((topic) => (
          <div key={topic.id} className="border p-2 rounded shadow">
            <img src={topic.thumbnail} alt={topic.title} className="mb-4" />
            <h2 className="text-s font-semibold md:text-xl">{topic.title}</h2>
            <Link
              to={`/video/${topic.id}`}
              className="text-s md:text-l block mt-4 bg-black text-white py-2 px-4 rounded text-center"
            >
              Watch Video
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsGrid;
