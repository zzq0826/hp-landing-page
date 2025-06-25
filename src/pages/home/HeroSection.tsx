import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { isValidEmail } from "utils/common";

const assets = ["WBTC", "ETH", "USDT", "USDC", "DAI"];

const url =
  "https://qq.us18.list-manage.com/subscribe/post?u=4bebdd4183d870a3b6505223f&amp;id=b96277ec83&amp;f_id=00e9aee6f0";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    setCustomMessage("");
    setEmailValid(isValidEmail(email));
  }, [email]);

  const handleSubmit = (subscribe: any) => {
    if (!email) {
      setCustomMessage("Please insert your email.");
    } else if (emailValid) {
      subscribe({ EMAIL: email });
      setEmail("");
    } else {
      setCustomMessage("Please use a correct email address.");
    }
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleEnter = (e: any, subscribe: any) => {
    if (e.keyCode === 13) {
      handleSubmit(subscribe);
    }
  };

  return (
    <section className="py-12 md:py-20 text-center">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          USX: Stable by Design,
          <br />
          Growing by Strategy
        </h1>
        <p className="mx-auto mt-9 max-w-4xl text-lg font-medium text-gray-400">
          Deposit BTC, ETH, USDT, USDC, and more to mint USX — a fully
          overcollateralized, yield-bearing stablecoin. Backed by both DeFi
          strategies and a real-world hedge fund, USX combines stability with
          sustainable growth.
        </p>
        <div className="mt-9 flex items-center justify-center space-x-8">
          {assets.map((asset) => (
            <div className="flex flex-col items-center space-y-2" key={asset}>
              {/* Placeholder for asset icon */}
              <img
                alt={asset}
                className="h-10 w-10"
                src={`/icons/${asset.toLowerCase()}.svg`}
              />
              <span className="text-sm font-medium">{asset}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <div className="mx-auto max-w-md rounded-lg bg-gray-800 border-gray-700 border bg-opacity-50 px-8 py-6">
            <h3 className="text-2xl font-bold">Join the Waitlist</h3>
            <p className="mt-2 text-gray-400">
              Join the waitlist now. First come first serve.
            </p>
            <MailchimpSubscribe
              render={({ subscribe, status, message }: any) => (
                <>
                  {status === "success" ? (
                    <div className="min-h-[40px] mt-4 flex items-center justify-center text-green-400 font-bold text-xl">
                      {message}
                    </div>
                  ) : (
                    <div>
                      <div className="mt-4 flex">
                        <input
                          className="flex-grow rounded-l-md bg-gray-900 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          name="EMAIL"
                          onChange={handleChangeEmail}
                          onKeyDown={(e) => handleEnter(e, subscribe)}
                          placeholder="Enter your email"
                          type="email"
                        />
                        <button
                          className="flex items-center rounded-r-md bg-white px-6 py-2 font-bold text-black cursor-pointer"
                          onClick={() => handleSubmit(subscribe)}
                        >
                          Join
                          <img
                            alt="arrow right"
                            className="ml-2 h-5 w-5"
                            src="/icons/arrow-right.svg"
                          />
                        </button>
                      </div>
                      <>
                        {customMessage && (
                          <div className="text-sm ml-2 mt-2 text-left">
                            {customMessage}
                          </div>
                        )}
                        {status === "error" && (
                          <div className="text-sm ml-2 mt-2 text-left text-red-500">
                            {message}
                          </div>
                        )}
                      </>
                    </div>
                  )}
                </>
              )}
              url={url}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
