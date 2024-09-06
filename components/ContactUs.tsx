"use client";
import React, { useState } from "react";
import Modal from "../components/Modal";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      <div id="contact">
        <main className="container mx-auto flex justify-center items-center py-8">
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label htmlFor="name" className="block text-gray-600">
                  Your Name
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
                <label htmlFor="email" className="block text-gray-600">
                  Your Email
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
                <label htmlFor="companyName" className="block text-gray-600">
                  Company Name
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
                <label htmlFor="industry" className="block text-gray-600">
                  Type of Industry
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
                <label htmlFor="websiteUrl" className="block text-gray-600">
                  Current Website URL
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
                <label htmlFor="businessGoals" className="block text-gray-600">
                  What are your business goals?
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
                <label htmlFor="state" className="block text-gray-600">
                  State
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
                <label htmlFor="city" className="block text-gray-600">
                  City
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
                <h3 className="block text-gray-600 font-semibold mb-2">My Service</h3>
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="website"
                      checked={formData.services.website}
                      onChange={handleInputChange}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Website</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="localSeo"
                      checked={formData.services.localSeo}
                      onChange={handleInputChange}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Local SEO</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="nationalSeo"
                      checked={formData.services.nationalSeo}
                      onChange={handleInputChange}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">National SEO</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-600">
                  Message
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
              <div className="md:col-span-2">
                <button type="submit" className="btn btn-primary btn-wide">
                  Send Message
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
