import React from "react";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-10  bg-opacity-50 backdrop-blur-md border-b border-gray-700 bg-[#090b13]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Placeholder for logo */}
          <div className="h-8 w-8 rounded-full bg-gray-500" />
          <span className="text-xl font-bold">USX</span>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
