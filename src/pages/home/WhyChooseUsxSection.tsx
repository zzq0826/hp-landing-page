import React from "react";
import { motion } from "framer-motion";

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="rounded-lg bg-gray-800 bg-opacity-50 p-6 text-center border-gray-700 border">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const WhyChooseUsxSection = () => (
  <section className="py-12 md:py-20">
    <motion.div
      className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Why Choose USX?</h2>
        <motion.p
          className="mt-4 text-lg font-medium text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The next generation of yield-bearing stablecoins
        </motion.p>
      </div>
      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-3 md:px-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
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
        </motion.div>
        <motion.div variants={itemVariants}>
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
        </motion.div>
        <motion.div variants={itemVariants}>
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
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhyChooseUsxSection;
