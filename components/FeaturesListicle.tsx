"use client";

import { useState, useEffect, useRef } from "react";
import type { JSX } from "react";
import { FaLaptopCode, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

// List of features to display:
// - name: name of the feature
// - description: description of the feature (can be any JSX)
// - svg: icon of the feature
const features: {
  name: string;
  description: JSX.Element;
  svg: JSX.Element;
}[] = [
  {
    name: "Web Development",
    description: (
      <>
        <p className="mb-4">
          Elevate your online presence with our cutting-edge web development solutions. 
          We create stunning, responsive websites that drive results for your business!
        </p>
        <ul className="space-y-2">
          {[
            "Custom Website Design",
            "Fully Mobile Responsive",
            "E-commerce Functionality",
            "SEO-Friendly Development",
            "Content Management Systems",
            "Custom Web Applications",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <FaLaptopCode className="w-8 h-8" />,
  },
  {
    name: "National SEO",
    description: (
      <>
        <p className="mb-4">
          Expand your reach across the country and dominate your industry. 
          Our expert National SEO strategies put your business on top nationwide!
        </p>
        <ul className="space-y-2">
          {[
            "Keyword Analysis & Optimization",
            "On-page & Technical SEO",
            "Content Creation & Strategy",
            "Link Building & Digital PR",
            "Performance Tracking & Reporting",
            "Competitor Analysis",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <FaGlobe className="w-8 h-8" />,
  },
  {
    name: "Local SEO",
    description: (
      <>
        <p className="mb-4">
          Boost your local online presence and attract more customers in your area. 
          Our expert Local SEO strategies put your business on the map!
        </p>
        <ul className="space-y-2">
          {[
            "Google Business Profile Optimization",
            "Local Keyword Optimization",
            "Citation Building & Management",
            "Review Management",
            "Local Link Building",
            "Local Content Strategy",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] inline shrink-0 opacity-80"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
    svg: <FaMapMarkerAlt className="w-8 h-8" />,
  },
];

// A list of features with a listicle style.
// - Click on a feature to display its description.
// - Good to use when multiples features are available.
// - Autoscroll the list of features (optional).
const FeaturesListicle = () => {
  const featuresEndRef = useRef<null>(null);
  const [featureSelected, setFeatureSelected] = useState<string>(
    features[0].name
  );
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  // (Optional) Autoscroll the list of features so user know it's interactive.
  // Stop scrolling when user scroll after the featuresEndRef element (end of section)
  // emove useEffect is not needed.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      // stop the interval when the user scroll after the featuresRef element
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("STOP AUTO CHANGE");
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <p className="text-accent font-medium text-sm font-mono mb-3">
            {/* Pure decoration, you can remove it */}
            const our_services = [&quot;Web Development&quot;, &quot;National SEO&quot;, &quot;Local SEO&quot;];
          </p>
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            {/* 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it? */}
            Boost Your Online Presence with Our Comprehensive Services
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
            From stunning website designs to powerful SEO strategies, we offer everything you need to dominate your market. Choose SEOBull to skyrocket your online visibility and attract more customers.
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
          {features.map((feature) => (
            <span
              key={feature.name}
              onClick={() => {
                if (!hasClicked) setHasClicked(true);
                setFeatureSelected(feature.name);
              }}
              className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
            >
              <span
                className={`duration-100 ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/30 group-hover:text-base-content/50"
                }`}
              >
                {feature.svg}
              </span>
              <span
                className={`font-semibold text-sm ${
                  featureSelected === feature.name
                    ? "text-primary"
                    : "text-base-content/50"
                }`}
              >
                {feature.name}
              </span>
            </span>
          ))}
        </div>
        <div className="bg-base-200">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
            <div
              className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
              key={featureSelected}
            >
              <h3 className="font-semibold text-base-content text-lg">
                {features.find((f) => f.name === featureSelected)["name"]}
              </h3>

              {features.find((f) => f.name === featureSelected)["description"]}
            </div>
          </div>
        </div>
      </div>
      {/* Just used to know it's the end of the autoscroll feature (optional, see useEffect) */}
      <p className="opacity-0" ref={featuresEndRef}></p>
    </section>
  );
};

export default FeaturesListicle;
