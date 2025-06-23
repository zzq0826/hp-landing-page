import React, { useState } from "react";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
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
      "USX is a yield-bearing stablecoin. This is a placeholder answer. Please replace it with the actual content.",
  },
  {
    question: "How is the 9.2% yield generated?",
    answer:
      "This is a placeholder answer. Please replace it with the actual content.",
  },
  {
    question: "What assets can I deposit to mint USX?",
    answer:
      "This is a placeholder answer. Please replace it with the actual content.",
  },
  {
    question: "Is USX safe and audited?",
    answer:
      "This is a placeholder answer. Please replace it with the actual content.",
  },
  {
    question: "When will USX be available?",
    answer:
      "This is a placeholder answer. Please replace it with the actual content.",
  },
];

const FaqSection = () => (
  <section className="py-20">
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-gray-400">
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
    </div>
  </section>
);

export default FaqSection;
