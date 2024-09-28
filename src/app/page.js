"use client";
import { useState } from "react";
import { FaTree, FaWater } from "react-icons/fa"; // Import tree and water icons

const HomePage = () => {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [waterCollected, setWaterCollected] = useState(0);
  const [gameStarted, setGameStarted] = useState(false); // New state to control game start

  const plantTree = () => {
    setTreesPlanted(treesPlanted + 1);
  };

  const collectWater = () => {
    setWaterCollected(waterCollected + 1);
  };

  const startGame = () => {
    setTreesPlanted(0); // Reset the game stats
    setWaterCollected(0);
    setGameStarted(true); // Start the game
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-5 text-center text-green-700">
        Z-5 Climate Mapper
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-lg">
        Welcome to the Z-5 Climate Mapper! Join us on a journey to understand climate
        change and take action to protect our planet.
      </p>

      {/* Game Section */}
      {gameStarted ? (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-md text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Simple Visual Game
          </h2>
          <p className="text-gray-700 mb-4">
            Click the buttons to plant trees or collect water drops!
          </p>

          <div className="flex flex-col space-y-4">
            <button
              onClick={plantTree}
              className="bg-green-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-green-700 focus:outline-none">
              Plant a Tree <FaTree className="inline-block ml-2" />
            </button>
            <button
              onClick={collectWater}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none">
              Collect Water <FaWater className="inline-block ml-2" />
            </button>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-green-700">
              Trees Planted: {treesPlanted}
            </h3>
            <h3 className="text-lg font-semibold text-blue-700">
              Water Collected: {waterCollected} liters
            </h3>
          </div>

          {/* Visual Representation */}
          <div className="mt-4 flex justify-center">
            {/* Tree Icons */}
            <div className="flex space-x-1">
              {Array.from({ length: treesPlanted }, (_, index) => (
                <FaTree key={index} className="w-8 h-8 text-green-600" />
              ))}
            </div>
            {/* Water Icons */}
            <div className="flex space-x-1 ml-4">
              {Array.from({ length: waterCollected }, (_, index) => (
                <FaWater key={index} className="w-8 h-8 text-blue-600" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 max-w-md text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Get Ready to Play!
          </h2>
          <p className="text-gray-700 mb-4">
            Click the button below to start your journey.
          </p>
          <button
            onClick={startGame}
            className="bg-green-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 hover:bg-green-700 focus:outline-none">
            Start Your Journey
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
