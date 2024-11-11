"use client";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col h-[100vh] text-gray-800">
      {/* Header Section */}
      <header className=" py-6">
        <div className="container flex justify-center items-center mx-auto px-4 text-center">
          <img src="/bcgcm.jpeg" alt="BCGCM" className=" h-32" />
        </div>
      </header>

      {/* Main Content Section */}
      <div className="flex-grow flex-col flex items-center justify-center">
        <div className="relative animate-pulse text-center">
          <img src="/bcgc.png" alt="ma-amma" className="p-8 h-96" />
        </div>
        <h1 className="text-3xl text-center font-bold typewriter">
          This website is under construction!
        </h1>
        <style jsx>{`
          .typewriter {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid white;
            animation: typing 3s steps(30, end),
              blink-caret 0.5s step-end infinite;
            animation-iteration-count: infinite;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink-caret {
            50% {
              border-color: transparent;
            }
          }
        `}</style>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#012061] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 BCGCM India Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
