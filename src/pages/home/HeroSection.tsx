import React from "react";

const assets = ["WBTC", "ETH", "USDT", "USDC", "DAI"];

const HeroSection = () => (
  <section className="py-20 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        USX: Stable by Design,
        <br />
        Growing by Strategy
      </h1>
      <p className="mx-auto mt-9 max-w-4xl text-lg text-gray-400 font-medium">
        Deposit BTC, ETH, USDT, USDC, and more to mint USX — a fully
        overcollateralized, yield-bearing stablecoin. Backed by both DeFi
        strategies and a real-world hedge fund, USX combines stability with
        sustainable growth.
      </p>
      <div className="mt-9 flex items-center justify-center space-x-8">
        {assets.map((asset) => (
          <div key={asset} className="flex flex-col items-center space-y-2">
            {/* Placeholder for asset icon */}
            <img
              src={`/icons/${asset.toLowerCase()}.svg`}
              alt={asset}
              className="h-10 w-10"
            />
            <span className="text-sm font-medium">{asset}</span>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <div className="mx-auto max-w-md rounded-lg bg-gray-800 bg-opacity-50 p-6">
          <h3 className="text-2xl font-bold">Join the Waitlist</h3>
          <p className="mt-2 text-gray-400">
            Join the waitlist now. First come first serve.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded-l-md bg-gray-900 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="flex items-center rounded-r-md bg-white px-6 py-2 font-bold text-black"
            >
              Join
              <img
                src="/icons/arrow-right.svg"
                alt="arrow right"
                className="ml-2 h-5 w-5"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
