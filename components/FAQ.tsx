"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a list of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList array below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What services do you offer for web design?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        We offer a range of web design services including:
        <ul className="list-disc pl-5">
          <li>Custom website design and development</li>
          <li>Responsive design for mobile devices</li>
          <li>E-commerce website development</li>
          <li>Website redesign and optimization</li>
          <li>User experience (UX) and user interface (UI) design</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What is national SEO and how can it benefit my business?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        National SEO is a strategy to improve your website&rsquo;s visibility in search engine results across an entire country. It can benefit your business by:
        <ul className="list-disc pl-5">
          <li>Increasing organic traffic from a wider audience</li>
          <li>Enhancing brand awareness on a national level</li>
          <li>Improving your competitive edge in your industry</li>
          <li>Driving more qualified leads and potential customers to your website</li>
        </ul>
      </div>
    ),
  },
  {
    question: "How is local SEO different from national SEO?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Local SEO focuses on optimizing your online presence to attract more business from relevant local searches. Unlike national SEO, local SEO targets specific cities, regions, or areas. Key differences include:
        <ul className="list-disc pl-5">
          <li>Emphasis on Google My Business optimization</li>
          <li>Focus on local keywords and phrases</li>
          <li>Importance of local citations and directories</li>
          <li>Targeting location-specific search results</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I request edits or changes to my project?",
    answer: (
      <p>
        Yes, you can request edits or changes. Be sure to contact us before 7 days after purchase by email. We&apos;re committed to ensuring your satisfaction with our services.
      </p>
    ),
  },
  
  {
    question: "Do you offer ongoing maintenance and support for websites?",
    answer: (
      <p>
        Yes, we offer ongoing maintenance and support packages for websites we&apos;ve designed. This includes regular updates, security checks, performance optimization, and technical support to ensure your website continues to function smoothly and effectively.
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">If you have any other questions or need further clarification, please don&apos;t hesitate to contact us by email. We&apos;re here to help!</div>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
