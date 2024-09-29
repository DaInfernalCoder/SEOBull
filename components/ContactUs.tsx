"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added new phone field
    message: "",
    industry: "",
    businessGoals: "",
    websiteUrl: "",
    state: "",
    city: "",
    companyName: "",
    services: {
      website: false,
      localSeo: false,
      nationalSeo: false,
    },
  });
  const [modalBody, setModalBody] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        services: {
          ...prevState.services,
          [name]: (event.target as HTMLInputElement).checked,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if all required fields are filled
    const requiredFields = [
      'name', 'email', 'phone', 'companyName', 'industry', 'websiteUrl',
      'businessGoals', 'state', 'city', 'message'
    ];

    const isFormValid = requiredFields.every(field => formData[field].trim() !== '');

    if (!isFormValid) {
      setModalBody({
        title: "Incomplete Form",
        content: "Please fill in all required fields before submitting.",
      });
      setIsModalOpen(true);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalBody({
          title: "Thank you!",
          content:
            "We have received your message and will get back to you soon!",
        });
      } else {
        setModalBody({
          title: "Oops!",
          content:
            "There was an error sending your message. Please try again later.",
        });
      }
    } catch (error) {
      setModalBody({
        title: "Error",
        content:
          "There was a problem connecting to the server. Please try again later.",
      });
    }

    setIsModalOpen(true);
  };

  return (
    <>
      <div id="contact-section">
        <main className="container mx-auto flex justify-center items-center py-8">
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Contact Us
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label htmlFor="name" className="block text-white">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-white">
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-white">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="industry" className="block text-white">
                  Type of Industry *
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="websiteUrl" className="block text-white">
                  Current Website URL (include https://) *
                </label>
                <input
                  type="url"
                  id="websiteUrl"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="businessGoals" className="block text-white">
                  What are your business goals? *
                </label>
                <input
                  type="text"
                  id="businessGoals"
                  name="businessGoals"
                  value={formData.businessGoals}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-white">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-white">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="block text-white font-semibold mb-2">
                  My Service
                </h3>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="website"
                      checked={formData.services.website}
                      onChange={handleInputChange}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-white">Website</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="localSeo"
                      checked={formData.services.localSeo}
                      onChange={handleInputChange}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-white">SEO</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="nationalSeo"
                      checked={formData.services.nationalSeo}
                      onChange={handleInputChange}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-white">Other</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-white">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2 flex flex-col items-center">
                <button type="submit" className="btn btn-primary btn-wide mb-4">
                  Send Message
                </button>

                <button
                  type="button"
                  className="btn btn-secondary btn-wide flex items-center justify-center mb-4 py-3 text-s"
                  onClick={() => {
                    /* Phone button click handler */
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  832-712-4168
                </button>

                <button
                  type="button"
                  className="btn normal-case flex items-center justify-between px-11 py-3 text-s w-full max-w-md mb-4"
                  onClick={() => {
                    /* Email button click handler */
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="truncate text-center flex-grow">customerservice@digitalseobull.com</span>
                </button>

                <button 
                  type="button"
                  className="btn normal-case flex items-center justify-between px-11 py-3 text-s w-full max-w-md"
                  onClick={() => {
                    /* Address button click handler */
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="truncate text-center flex-grow">5307 Metzger Court, Houston, TX 77479</span>
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalBody={modalBody}
      />
    </>
  );
};

export default ContactUs;
