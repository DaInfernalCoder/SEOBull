"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "../config";
import seoDemo from "../app/seo-demo.webp";

const useTypingEffect = (texts: string[], typingSpeed: number = 150, deletingSpeed: number = 50, pauseDuration: number = 2000) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
          timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
};

const Hero = () => {
  const texts = [
    "Boost your revenue",
    "Get to the top of search",
    "Attract more customers",
    "Build an attractive website", 
    "Increase your website traffic"
  ];

  const typedText = useTypingEffect(texts);

  return (
    <section className="w-full bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 min-h-[1.5em] inline-block">
              <strong>{typedText}</strong>
            </span>{" "}
            with {config.appName} 🚀
          </h1>
          <p className="text-lg opacity-80 leading-relaxed">
            The SEO boosting service, to get more clicks and boost your website traffic without headaches. Get to the top of Google search results with {config.appName}.
            We are experts in SEO with over 6 years of experience
          </p>
          <button className="btn btn-primary btn-wide">
            Get {config.appName}
          </button>

          <TestimonialsAvatars priority={true} />
        </div>
        <div className="lg:w-full">
          <Image
            src={seoDemo}
            alt="Product Demo"
            className="w-full h-auto "
            priority={true}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
