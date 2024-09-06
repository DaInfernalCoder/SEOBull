"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaMapMarkerAlt, FaStar, FaLink } from "react-icons/fa";
import ContactUs from "../../components/ContactUs";

const LocalSEOPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-4 animate-fadeIn">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-slideInLeft">
              Local SEO Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl animate-slideInRight">
              Boost your local online presence and attract more customers in
              your area. Our expert Local SEO strategies put your business on
              the map!
            </p>
            <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-green-100 transition duration-300 animate-bounce">
              Get Started
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold mb-8 text-center animate-fadeIn">
            Our Local SEO Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Silver Package
              </h3>
              <p className="text-xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
                <strong>Custom Solutions</strong>
              </p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• 20 keyphrases optimized</li>
                <li>• 5 Guaranteed Keywords in Top</li>
                <li>• In-Depth Site Analysis</li>
                <li>• Duplicate Content Check</li>
                <li>• Basic Competition Analysis</li>
                <li>• Keywords Analysis</li>
                <li>• URL Mapping</li>
                <li>• Google Penalty Analysis</li>
                <li>• Web server analysis & reporting</li>
              </ul>
              <button className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                Contact Us
              </button>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Gold Package
              </h3>
              <p className="text-xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
                <strong>Custom Solutions</strong>
              </p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• 40 keyphrases optimized</li>
                <li>• 10 Guaranteed Keywords in Top</li>
                <li>• All Silver features included</li>
                <li>• Broken Link Analysis</li>
                <li>• Heading Tags Optimization</li>
                <li>• Image Optimization</li>
                <li>• Google Analytics Conversion Setup</li>
                <li>• Schema Implementation for Contact Address</li>
                <li>• Desktop Page Speed Optimization</li>
              </ul>
              <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Contact Us
              </button>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                Platinum Package
              </h3>
              <p className="text-xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
                <strong>Custom Solutions</strong>
              </p>
              <ul className="text-sm space-y-2 mb-6">
                <li>• 60 keyphrases optimized</li>
                <li>• 15 Guaranteed Keywords in Top</li>
                <li>• All Gold features included</li>
                <li>• Advanced Competition Analysis</li>
                <li>• Location Based Page Analysis</li>
                <li>• Bing Local Listing Setup</li>
                <li>• 3 Guest Post Writing (600 words)</li>
                <li>• 3 Classified Writing</li>
                <li>• 15 Classified Submission</li>
              </ul>
              <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8 text-center animate-fadeIn">
            Additional Local SEO Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp">
              <FaMapMarkerAlt className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Google Business Profile Optimization
              </h3>
              <p className="mb-4">
                Maximize your visibility on Google Maps and local search
                results.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Complete GBP profile setup</li>
                <li>• Keyword-optimized business description</li>
                <li>• Regular posts and updates</li>
              </ul>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <FaStar className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Review Management</h3>
              <p className="mb-4">
                Build trust with potential customers through positive reviews.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Review monitoring and response</li>
                <li>• Review generation strategies</li>
                <li>• Reputation management</li>
              </ul>
            </div>
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <FaLink className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Local Link Building
              </h3>
              <p className="mb-4">
                Establish authority in your local market with strategic
                backlinks.
              </p>
              <ul className="text-sm space-y-2">
                <li>• Local directory submissions</li>
                <li>• Outreach to local businesses</li>
                <li>• Creation of linkable assets</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-lg text-center text-white animate-fadeIn">
            <h2 className="text-3xl font-semibold mb-4">
              Ready to Dominate Your Local Market?
            </h2>
            <p className="mb-6 text-xl">
              Contact us today to skyrocket your local online presence!
            </p>
            <button className="bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-green-100 transition duration-300 animate-pulse">
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

export default LocalSEOPage;
