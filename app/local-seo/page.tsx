"use client";

import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactUs from "../../components/ContactUs";
import Image from "next/image";
import seocontents from "../seocontents.jpg";
import seogrowth from "../seogrowth.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contentwriting from "../contentwriting.webp"
import blog from "../blog.jpg"

const LocalSEOPage: React.FC = () => {
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

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-24 px-4">
            <div className="container mx-auto">
              <motion.h1
                className="text-6xl font-bold mb-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                SEO Services
              </motion.h1>
              <motion.p
                className="text-2xl mb-8 max-w-2xl"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Boost your local online presence and attract more customers in
                your area. Our expert SEO strategies put your business on
                the map!
              </motion.p>
              <motion.button
                onClick={scrollToContact}
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Content - Blog-like Layout */}
        <AnimatedSection>
          <div className="bg-gradient-to-b from-slate-500 to-gray-100 py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-12 mb-20">
                <motion.div
                  className="md:w-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg"
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl font-semibold mb-6 text-gray-800">
                    Do you show up on the top when your prospects search online?
                  </h2>
                  <p className="mb-4 text-lg text-gray-700">
                    With over 200 ranking factors that determine organic results
                    placement, there&apos;s a lot to consider! We will partner
                    with you to understand your business goals in order to
                    improve your reach in the organic search results. Signing up
                    for SEO services is a long-term investment that has to be
                    managed on an ongoing basis to maintain rankings, stay ahead
                    of the competition, and accommodate new search engine
                    algorithms.
                  </p>
                  <motion.button
                    onClick={scrollToContact}
                    className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 mt-4"
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
                    src={seocontents}
                    alt="Local SEO Strategy"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* SEO Benefits Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-tr from-violet-500 to-orange-300 py-20 text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-semibold mb-12 text-center">
                How can SEO grow my business?
              </h2>
              <motion.div
                className="flex flex-wrap justify-center gap-12"
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
              >
                {[
                  {
                    title: "Search Engine Optimization",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Website Visibility",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Increased Traffic",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Increased Revenue",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="w-64 text-center"
                    variants={fadeInUp}
                  >
                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient
                            id={`gradient-${index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#FFFFFF" />
                            <stop offset="100%" stopColor="#F3E8FF" />
                          </linearGradient>
                        </defs>
                        <motion.circle
                          className="text-purple-200 stroke-current"
                          strokeWidth="8"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: index * 0.5 }}
                        />
                        <motion.circle
                          className="progress-ring__circle"
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="8"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: index * 0.5 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        {benefit.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
              <div className="text-center mt-12">
                <motion.button
                  onClick={scrollToContact}
                  className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why You Need SEO Section */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row-reverse gap-12 mb-20">
                <motion.div className="md:w-1/2" variants={fadeInUp}>
                  <h2 className="text-4xl font-semibold mb-6 text-gray-800">
                    Why You Need SEO
                  </h2>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                    Simply put, it&apos;s your road to success
                  </h3>
                  <p className="mb-4 text-lg text-gray-600">
                    The elegant combination of great SEO in addition to
                    mobile-friendly web services will give you an edge on the
                    local competition, ultimately giving you more leads. Having
                    an awesome, well designed website is extremely important,
                    but it&apos;s even more important that your website is coded
                    and structured properly for SEO, and without errors.
                  </p>
                  <motion.button
                    onClick={scrollToContact}
                    className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 mt-4"
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
                    src={seogrowth}
                    alt="Local SEO Impact"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Why Content Writing Matters */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-sky-400 to-sky-200 py-20 text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-12">
                <motion.div
                  className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
                  variants={fadeInUp}
                >
                  <h2 className="text-4xl font-semibold mb-6 text-gray-900">
                    Why Content Writing Matters
                  </h2>
                  <div className="text-lg text-gray-800">
                    <p className="mb-4">
                      Content and design work together to enhance the message of
                      your site through visuals and text. Written text should
                      always be relevant and useful, because confusing the
                      reader is a great way to make them leave your page and
                      move on to the next. Content should be optimized for
                      search engines and be of a suitable length, incorporating
                      relevant keywords for SEO. Many years ago, if you wanted
                      to rank high in the SERPS you would simply stuff as many
                      relevant keywords as you could into a jumble of text and
                      call it a day.
                    </p>
                    <p className="mb-4">
                      Nowadays, SEO isn&apos;t so simple. Not only does the
                      content have to be filled with information, it needs to be
                      engaging too. Content needs to ensure that people
                      don&apos;t just click on your website; you want people to
                      come back. Ask any SEO service and they will tell you that
                      &quot;Content is King&quot; for a reason – even more than
                      the products on your site, content is the very reason
                      people will be attracted to your company. SEO Bull has
                      experienced content writers on staff to deliver the
                      product or service you are promoting online the right way.
                    </p>
                    <motion.button
                      onClick={scrollToContact}
                      className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 mt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 flex justify-center items-center"
                  variants={slideIn}
                >
                  <Image
                    src={contentwriting}
                    alt="Content Writing Importance"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Blogging */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-slate-500 to-stone-700 py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row-reverse gap-12">
                <motion.div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg" variants={fadeInUp}>
                  <h2 className="text-4xl font-semibold mb-6 text-gray-800">
                    Blogging
                  </h2>
                  <div className="text-lg text-gray-800">
                    <p className="mb-4">
                      If you want to rank high on any major search engine
                      you&apos;ll need lots of content for SEO. One way to
                      achieve this is by having blogs. Blogs are a great way to
                      drive traffic to your website in a unique way. As we
                      talked about earlier, content is the King of getting you
                      traffic, but your website may not have that many pages –
                      blogs can fix this problem.
                    </p>
                    <p className="mb-4">
                      Each time you post a blog it adds more content to your
                      website, which the search engines want to see. Blogging
                      also adds the social media element into the mix. Sure,
                      people can &quot;like&quot; your business page, but blogs
                      offer the opportunity to be shared individually on social
                      media like Twitter, LinkedIn, Facebook, and Pinterest to
                      name a few.
                    </p>
                    <p className="mb-4">
                      Search engines love fresh and unique content, and by
                      writing blogs we can give them exactly what they need. SEO Bull
                      has experienced writers on staff that can deliver unique
                      content for any budget.
                    </p>
                    <motion.button
                      onClick={scrollToContact}
                      className="bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 mt-4"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-1/2 flex justify-center items-center"
                  variants={slideIn}
                >
                  <Image
                    src={blog}
                    alt="Blogging for SEO"
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
            <div className="container mx-auto px-4">
              <motion.div
                className="bg-white bg-opacity-10 p-12 rounded-2xl text-center text-white shadow-2xl"
                variants={fadeInUp}
              >
                <h2 className="text-4xl font-semibold mb-6">
                  Ready to Dominate Your Local Market?
                </h2>
                <p className="mb-8 text-2xl">
                  Contact us today to skyrocket your local online presence!
                </p>
                <motion.button
                  onClick={scrollToContact}
                  className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-purple-100 transition duration-300 transform hover:scale-105"
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

export default LocalSEOPage;
