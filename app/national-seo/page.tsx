"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaGlobe, FaChartLine, FaLink } from "react-icons/fa";
import ContactUs from "../../components/ContactUs";

const NationalSEOPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20 px-4 animate-fadeIn">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-slideInLeft">
              National SEO Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl animate-slideInRight">
              Expand your reach across the country and dominate your industry.
              Our expert National SEO strategies put your business on top
              nationwide!
            </p>
            <button className="bg-white text-orange-500 font-bold py-3 px-6 rounded-full hover:bg-orange-100 transition duration-300 animate-bounce">
              Get Started
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold mb-8 text-center animate-fadeIn">
            Our National SEO Packages
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp">
              <h3 className="text-2xl font-semibold mb-4 text-orange-500">
                Silver Package
              </h3>
              <p className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
                <strong>Custom Solutions</strong>
              </p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• 15 keyphrases optimized</li>
                <li>• Website Audit</li>
                <li>• Keyword Analysis & Grouping</li>
                <li>• On-page Optimization</li>
                <li>• Google My Business optimization</li>
                <li>• Mobile site optimization</li>
                <li>• Technical SEO Implementation</li>
                <li>• Monthly Performance Reports</li>
              </ul>
              <button className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
                Contact Us
              </button>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-red-500">
                Gold Package
              </h3>
              <p className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
                <strong>Custom Solutions</strong>
              </p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• 30 keyphrases optimized</li>
                <li>• All Silver features included</li>
                <li>• 20 Pages Optimized</li>
                <li>• Keyword Mapping</li>
                <li>• Content Creation (2 blog posts)</li>
                <li>• Rich Snippet Recommendations</li>
                <li>• Social Media Account Set-up</li>
                <li>• Video Creation & Submission</li>
              </ul>
              <button className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300">
                Contact Us
              </button>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                Platinum Package
              </h3>
              <p className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
                <strong>Custom Solutions</strong>
              </p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• 50 keyphrases optimized</li>
                <li>• All Gold features included</li>
                <li>• 30 Pages Optimized</li>
                <li>• 5 Webpage Copywriting</li>
                <li>• Content Creation (4 blog posts)</li>
                <li>• Advanced Link Building</li>
                <li>• In-depth Competitor Analysis</li>
                <li>• Custom 404 error page setup</li>
              </ul>
              <button className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                Contact Us
              </button>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.6s" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                Aggressive Package
              </h3>
              <p className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
                <strong>Custom Solutions</strong>
              </p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• Up to 100 keyphrases optimized</li>
                <li>• All Platinum features included</li>
                <li>• 80 Pages Optimized</li>
                <li>• 10 Webpage Copywriting</li>
                <li>• Content Creation (8 blog posts)</li>
                <li>• Magazine/News Placement</li>
                <li>• Press Release Writing & Submission</li>
                <li>• Advanced Off-page SEO Strategies</li>
              </ul>
              <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8 text-center animate-fadeIn">
            Additional National SEO Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp">
              <FaGlobe className="text-4xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                National Content Strategy
              </h3>
              <p className="mb-4">
                Develop a comprehensive content plan to target nationwide
                audiences.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Industry-specific content creation</li>
                <li>• Content distribution strategy</li>
                <li>• Guest posting on national platforms</li>
              </ul>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <FaChartLine className="text-4xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="mb-4">
                Gain deep insights into your national SEO performance and ROI.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Custom KPI tracking</li>
                <li>• Competitor benchmarking</li>
                <li>• Multi-channel attribution modeling</li>
              </ul>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <FaLink className="text-4xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                National Link Building
              </h3>
              <p className="mb-4">
                Build a robust backlink profile from authoritative national
                sources.
              </p>
              <ul className="text-sm space-y-2">
                <li>• High-quality link prospecting</li>
                <li>• Digital PR campaigns</li>
                <li>• Broken link building at scale</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 p-8 rounded-lg text-center text-white animate-fadeIn">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Dominate the National Market?
            </h2>
            <p className="mb-6 text-xl">
              Contact us today to skyrocket your nationwide online presence!
            </p>
            <button className="bg-white text-orange-500 font-bold py-3 px-6 rounded-full hover:bg-orange-100 transition duration-300 animate-pulse">
              Get in Touch
            </button>
          </div>
        </div>
      </main>
      <ContactUs />
      <Footer />
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NationalSEOPage;
