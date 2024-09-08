"use client";

import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import Image from "next/image";
import intertwined from "../intertwined.jpg";
import websiteexperience from "../website-experience.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WebDevelopmentPage: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };


  const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-24 px-4">
            <div className="container mx-auto">
              <motion.h1
                className="text-6xl font-bold mb-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Web Development Services
              </motion.h1>
              <motion.p
                className="text-2xl mb-8 max-w-2xl"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Elevate your online presence with our cutting-edge web
                development solutions. We create stunning, responsive websites
                that drive results for your business!
              </motion.p>
              <motion.button
                onClick={scrollToContact}
                className="bg-white text-emerald-500 font-bold py-4 px-8 rounded-full hover:bg-emerald-100 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </AnimatedSection>

        {/* Website Design Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-b from-slate-500 to-gray-100 py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-12 mb-20">
                <motion.div
                  className="md:w-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl font-semibold mb-6 text-gray-800">
                    Website Design
                  </h2>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                    Is your website making the right impression?
                  </h3>
                  <p className="mb-4 text-lg text-gray-700">
                    Your website is an extension of your business, and many times is the first impression someone will have of your company. An outdated or ineffective website design can be detrimental to your bottom line, if not a terrible reflection of your business, team, and products or services. Think of your site&apos;s visitors as people walking through the front door of your company.
                  </p>
                  <p className="mb-4 text-lg text-gray-700">
                    What type of experience do you want them to have?
                  </p>
                  <motion.button
                    onClick={scrollToContact}
                    className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-700 transition duration-300 transform hover:scale-105 mt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
                <motion.div
                  className="md:w-1/2 flex justify-center items-center"
                  variants={slideIn}
                >
                  <Image
                    src={websiteexperience}
                    alt="Website Design Strategy"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Development Done Differently Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-tr from-indigo-500 to-amber-300 py-20 text-black">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-semibold mb-6 text-center">
                Development Done Differently
              </h2>
              <motion.div
                className="bg-white bg-opacity-10 p-12 rounded-2xl text-center text-black shadow-2xl"
                variants={fadeInUp}
              >
                <p className="mb-6 text-xl">
                  Because we think your website design should be more than just a pretty face. We explain to new customers all the time that we are not a &quot;web design agency.&quot; Rather, we are a search engine marketing firm that develops websites with marketing in mind. And for you, we think this should make all the difference.
                </p>
                <p className="mb-8 text-xl">
                  At SEO Bull, our design and development team is passionate about what they do. Whether you need an e-commerce website or a mobile-friendly responsive conversion, our website development process allows us to create a solution that fits your business&apos;s needs. We build websites with easy-to-use content management systems so edits are simple to make once the site is yours.
                </p>
                <motion.button
                  onClick={scrollToContact}
                  className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-full hover:bg-indigo-100 transition duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why We Include Web Design With Our SEO Services Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row-reverse gap-12 mb-20">
                <motion.div className="md:w-1/2" variants={fadeInUp}>
                  <h2 className="text-4xl font-semibold mb-6 text-gray-800">
                    Why Should You Use Our Web Design Services?
                  </h2>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                    It turns out website design and SEO are intertwined!
                  </h3>
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h4 className="text-3xl font-semibold mb-4 text-gray-800">What kind of website do you think customers want to see?</h4>
                    <p className="mb-4 text-lg text-gray-600">
                    Most websites are not built or structured properly. Most websites that come to us are built poorly, using clunky templates, dated code, or just downright disorganized. By us rebuilding your website, we design or redesign from the ground up using the latest techniques for development and SEO. 
                    </p>
                  </div>
                  <motion.button
                    onClick={scrollToContact}
                    className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-full hover:bg-emerald-700 transition duration-300 transform hover:scale-105 mt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
                <motion.div
                  className="md:w-1/2 flex justify-center items-center"
                  variants={slideIn}
                >
                  <Image
                    src={intertwined}
                    alt="SEO and Web Design"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-20">
            <div className="container mx-auto px-4">
              <motion.div
                className="bg-white bg-opacity-10 p-12 rounded-2xl text-center text-white shadow-2xl"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-semibold mb-6">
                  Ready to Transform Your Online Presence?
                </h2>
                <p className="mb-8 text-2xl">
                  Contact us today to bring your web development vision to life!
                </p>
                <motion.button
                  onClick={scrollToContact}
                  className="bg-white text-emerald-600 font-bold py-4 px-8 rounded-full hover:bg-emerald-100 transition duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <div ref={contactRef}>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
