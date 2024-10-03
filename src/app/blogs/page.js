"use client";
import { commonApi } from "@/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

const FullScreenLoader = () => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
    <div className="loader"></div>
  </div>
);

export default function Blog() {
  const { data, isLoading } = useQuery({
    queryKey: ["getAPOD"],
    queryFn: async () => await commonApi.getAPOD(),
  });

  // State to manage modal visibility and selected image
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // State to manage expanded explanation per blog post
  const [expanded, setExpanded] = useState({});

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  // Toggle the expanded state for a specific blog
  const toggleExpanded = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to trim text to a specified word count
  const trimText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      {/* Show full-screen loader while data is loading */}
      {isLoading && <FullScreenLoader />}

      {/* Blog Cards */}
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data?.map((blog) => {
          const isExpanded = expanded[blog?.date];

          return (
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
              key={blog?.date}>
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={blog?.hdurl ?? ""}
                  alt={blog?.title}
                  fill
                  objectFit="cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg transition-transform duration-300 transform hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog?.title}</h2>

                {/* Date */}
                <p className="text-sm text-gray-600 mb-4">Date: {blog?.date}</p>

                {/* Explanation with "See More"/"See Less" */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {isExpanded ? blog?.explanation : trimText(blog?.explanation, 20)}{" "}
                </p>

                {/* Toggle Button */}
                {blog?.explanation.split(" ").length > 10 && (
                  <button
                    onClick={() => toggleExpanded(blog?.date)}
                    className="text-blue-500 hover:text-blue-700 text-sm mt-2">
                    {isExpanded ? "See Less" : "See More"}
                  </button>
                )}
              </div>

              {/* Footer Section */}
              <div className="p-4 bg-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-500">© {blog?.copyright || "Unknown"}</span>
                <button
                  onClick={() => openModal(blog?.hdurl)}
                  className="text-blue-500 hover:text-blue-700 text-sm">
                  View HD Image
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
              onClick={closeModal}>
              ✕
            </button>

            {/* Image in Modal */}
            <div className="relative w-full h-[75vh] flex items-center justify-center">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="HD Image"
                  fill
                  objectFit="contain"
                  className="rounded-lg shadow-lg"
                />
              ) : (
                <p>No Image Available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
