import { useState } from "react";
import { motion } from "framer-motion";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700  rounded mb-4 p-4 bg-gray-800 bg-opacity-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-lg font-medium">{question}</span>
        <img
          src="/icons/chevron-down.svg"
          alt="chevron down"
          className={`h-6 w-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <p className="mt-2 text-gray-400">{answer}</p>}
    </div>
  );
};

const faqs = [
  {
    question: "What is USX and how does it work?",
    answer:
      "USX is a decentralized stablecoin designed to be both secure and yield-bearing. You can mint USX by depositing supported collateral such as ETH, wBTC, USDC, or USDT. Once minted, your USX is automatically staked to earn yield—giving you a stablecoin that puts your capital to work. Collateral management, staking, and liquidations are all handled on-chain through smart contracts, with no banks or intermediaries involved.",
  },
  {
    question: "How is the 9~20% yield generated?",
    answer:
      "Yield is generated through a professionally managed strategy run by a hedge fund. Collateral is deployed into a diversified mix of market-neutral trading, low-risk lending, and liquidity provisioning. All strategies are risk-controlled and actively monitored, with a target APY ranging from 9% to 20% depending on market conditions. Your yield accrues automatically and is reflected in your staked USX balance.",
  },
  {
    question: "What assets can I use to mint USX?",
    answer:
      "You can currently mint USX by depositing ETH, wBTC, USDC, or USDT. The protocol applies different collateralization ratios based on asset type—for example, stablecoins like USDC are accepted at a 1:1 ratio, while more volatile assets like ETH require higher collateral margins.",
  },
  {
    question: "Is USX safe and audited?",
    answer:
      "Yes—security is foundational to USX. All smart contracts have been formally verified and audited by top-tier firms such as [Audit Firm A] and [Audit Firm B]. The protocol also features robust oracle protections, circuit breakers, and a dedicated insurance fund to protect user funds. Transparency and resilience are core to our design—we believe trust must be earned.",
  },
  {
    question: "When will USX be available?",
    answer:
      "USX is scheduled to launch in Q3 2025. We’re currently finalizing integrations and conducting closed testing with ecosystem partners. To get updates or request early access, visit our homepage or follow us on social media.",
  },
];

const FaqSection = () => (
  <section className="py-12 md:py-20">
    <motion.div
      className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg font-medium text-gray-400">
          Everything you need to know about USX
        </p>
      </div>
      <div className="mt-12">
        {faqs.map((faq) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default FaqSection;
