import { useState } from "react";

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between text-left">
        <span className="text-lg font-medium">{question}</span>
        <img
          src="/icons/chevron-down.svg"
          alt="chevron down"
          className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <p className="mt-2 text-gray-400">{answer}</p>}
    </div>
  );
};

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50 backdrop-blur-md">
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

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="rounded-lg bg-gray-800 bg-opacity-50 p-6 text-center">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export function Home() {
  const faqs = [
    {
      question: "What is USX and how does it work?",
      answer: "USX is a yield-bearing stablecoin. This is a placeholder answer. Please replace it with the actual content.",
    },
    {
      question: "How is the 9.2% yield generated?",
      answer: "This is a placeholder answer. Please replace it with the actual content.",
    },
    {
      question: "What assets can I deposit to mint USX?",
      answer: "This is a placeholder answer. Please replace it with the actual content.",
    },
    {
      question: "Is USX safe and audited?",
      answer: "This is a placeholder answer. Please replace it with the actual content.",
    },
    {
      question: "When will USX be available?",
      answer: "This is a placeholder answer. Please replace it with the actual content.",
    },
  ];

  const assets = ["WBTC", "ETH", "USDT", "USDC", "DAI"];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <div className="pt-16">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                USX: Stable by Design,
                <br />
                Growing by Strategy
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                Deposit BTC, ETH, USDT, USDC, and more to mint USX — a fully overcollateralized, yield-bearing stablecoin. Backed by both DeFi
                strategies and a real-world hedge fund, USX combines stability with sustainable growth.
              </p>
              <div className="mt-8 flex items-center justify-center space-x-4">
                {assets.map((asset) => (
                  <div key={asset} className="flex flex-col items-center space-y-2">
                    {/* Placeholder for asset icon */}
                    <div className="h-10 w-10 rounded-full bg-gray-600" />
                    <span className="text-sm font-medium">{asset}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <div className="mx-auto max-w-md rounded-lg bg-gray-800 bg-opacity-50 p-6">
                  <h3 className="text-xl font-bold">Join the Waitlist</h3>
                  <p className="mt-2 text-gray-400">Join the waitlist now. First come first serve.</p>
                  <form className="mt-4 flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow rounded-l-md bg-gray-900 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="flex items-center rounded-r-md bg-white px-6 py-2 font-bold text-black">
                      Join
                      <img src="/icons/arrow-right.svg" alt="arrow right" className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose USX Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Why Choose USX?</h2>
                <p className="mt-4 text-lg text-gray-400">The next generation of yield-bearing stablecoins</p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-3 px-24">
                <Feature
                  icon={<img src="/icons/shield.svg" alt="shield icon" className="h-12 w-12 text-white" />}
                  title="Fully Overcollateralized"
                  description="Every USX token is backed by more than $1 worth of assets, ensuring stability and security."
                />
                <Feature
                  icon={<img src="/icons/trending-up.svg" alt="trending up icon" className="h-12 w-12 text-white" />}
                  title="Sustainable Yield"
                  description="Earn consistent returns through our diversified DeFi and traditional finance strategies."
                />
                <Feature
                  icon={<img src="/icons/link.svg" alt="link icon" className="h-12 w-12 text-white" />}
                  title="Multi-Asset Support"
                  description="Deposit BTC, ETH, USDT, USDC, and other major cryptocurrencies to mint USX."
                />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 text-lg text-gray-400">Everything you need to know about USX</p>
              </div>
              <div className="mt-12">
                {faqs.map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
