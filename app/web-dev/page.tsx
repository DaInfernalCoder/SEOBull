"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FaLaptopCode, FaPalette, FaTools } from "react-icons/fa";
import ContactUs from "../../components/ContactUs";

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 px-4 animate-fadeIn">
            <div className="container mx-auto">
              <h1 className="text-5xl font-bold mb-6 animate-slideInLeft">
                Web Development Services
              </h1>
              <p className="text-xl mb-8 max-w-2xl animate-slideInRight">
                Elevate your online presence with our cutting-edge web
                development solutions. We create stunning, responsive websites
                that drive results for your business!
              </p>
              <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 animate-bounce">
                Get Started
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold mb-8 text-center animate-fadeIn">
              Our Web Development Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp">
                <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                  Silver Package
                </h3>
                <p className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  <strong>Custom Solutions</strong>
                </p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>• Number of Pages - 10</li>
                  <li>• WordPress/HTML Website</li>
                  <li>• Custom Website Design</li>
                  <li>• Fully Mobile Responsive</li>
                  <li>• Fully SEO Friendly Page</li>
                  <li>• Latest Design</li>
                  <li>• Contact Page with Google Captcha</li>
                  <li>• Social Media Icon Integration</li>
                  <li>• SEO Plugin</li>
                  <li>• Google Location Map</li>
                  <li>• XML Sitemap</li>
                  <li>• Google Analytics</li>
                  <li>• Google Webmaster</li>
                </ul>
                <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Contact Us
                </button>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-purple-500">
                  Gold Package
                </h3>
                <p className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  <strong>Custom Solutions</strong>
                </p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>• Number of Pages - 20</li>
                  <li>• WordPress/HTML Website</li>
                  <li>• Custom Website Design</li>
                  <li>• Fully Mobile Responsive</li>
                  <li>• Fully SEO Friendly Page</li>
                  <li>• Latest Design</li>
                  <li>• Contact Page with Google Captcha</li>
                  <li>• Social Media Icon Integration</li>
                  <li>• SEO Plugin</li>
                  <li>• Google Location Map</li>
                  <li>• XML Sitemap</li>
                  <li>• Google Analytics</li>
                  <li>• Google Webmaster</li>
                  <li>• Basic E-commerce Functionality</li>
                </ul>
                <button className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-300">
                  Contact Us
                </button>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                  Platinum Package
                </h3>
                <p className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  <strong>Custom Solutions</strong>
                </p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>• Number of Pages - 30</li>
                  <li>• WordPress/HTML Website</li>
                  <li>• Custom Website Design</li>
                  <li>• Fully Mobile Responsive</li>
                  <li>• Fully SEO Friendly Page</li>
                  <li>• Latest Design</li>
                  <li>• Contact Page with Google Captcha</li>
                  <li>• Social Media Icon Integration</li>
                  <li>• SEO Plugin</li>
                  <li>• Google Location Map</li>
                  <li>• XML Sitemap</li>
                  <li>• Google Analytics</li>
                  <li>• Google Webmaster</li>
                  <li>• Advanced E-commerce Functionality</li>
                  <li>• Custom API Integration</li>
                </ul>
                <button className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition duration-300">
                  Contact Us
                </button>
              </div>
            </div>

            <h2 className="text-3xl font-semibold mb-8 text-center animate-fadeIn">
              Additional Web Development Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp">
                <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Custom Web Applications
                </h3>
                <p className="mb-4">
                  Develop tailored web applications to meet your specific
                  business needs.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Full-stack development</li>
                  <li>• Cloud-based solutions</li>
                  <li>• Scalable architecture</li>
                </ul>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <FaPalette className="text-4xl text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                <p className="mb-4">
                  Create intuitive and visually appealing user interfaces for
                  your web projects.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• User-centered design</li>
                  <li>• Wireframing and prototyping</li>
                  <li>• Responsive design</li>
                </ul>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                <FaTools className="text-4xl text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Website Maintenance and Support
                </h3>
                <p className="mb-4">
                  Keep your website running smoothly with our comprehensive
                  maintenance and support services.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Regular updates and security patches</li>
                  <li>• Performance optimization</li>
                  <li>• 24/7 technical support</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-lg text-center text-white animate-fadeIn">
              <h2 className="text-3xl font-semibold mb-4">
                Ready to Transform Your Online Presence?
              </h2>
              <p className="mb-6 text-xl">
                Contact us today to bring your web development vision to life!
              </p>
              <button className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 animate-pulse">
                Get in Touch
              </button>
            </div>
          </div>
        </main>
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
      <ContactUs />
    </>
  );
};

export default WebDevelopmentPage;
