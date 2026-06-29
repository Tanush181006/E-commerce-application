import React from "react";
import QuantitySelector from "../components/QuantitySelector";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 gap-10">
      <h1 className="text-5xl font-bold text-blue-500">
        E-Commerce
      </h1>

      <QuantitySelector />
    </div>
  );
};

export default Home;