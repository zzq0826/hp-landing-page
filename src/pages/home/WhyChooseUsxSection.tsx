import React from "react";

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="rounded-lg bg-gray-800 bg-opacity-50 p-6 text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const WhyChooseUsxSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Why Choose USX?</h2>
        <p className="mt-4 text-lg text-gray-400 font-medium">
          The next generation of yield-bearing stablecoins
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3 px-24">
        <Feature
          icon={
            <img
              src="/icons/shield.svg"
              alt="shield icon"
              className="h-12 w-12 text-white"
            />
          }
          title="Fully Overcollateralized"
          description="Every USX token is backed by more than $1 worth of assets, ensuring stability and security."
        />
        <Feature
          icon={
            <img
              src="/icons/trending-up.svg"
              alt="trending up icon"
              className="h-12 w-12 text-white"
            />
          }
          title="Sustainable Yield"
          description="Earn consistent returns through our diversified DeFi and traditional finance strategies."
        />
        <Feature
          icon={
            <img
              src="/icons/link.svg"
              alt="link icon"
              className="h-12 w-12 text-white"
            />
          }
          title="Multi-Asset Support"
          description="Deposit BTC, ETH, USDT, USDC, and other major cryptocurrencies to mint USX."
        />
      </div>
    </div>
  </section>
);

export default WhyChooseUsxSection;
