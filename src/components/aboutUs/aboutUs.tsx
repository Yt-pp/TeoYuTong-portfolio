"use client";
import { aboutUsImage } from "@/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { GradientText } from "../gradientText";
import dynamic from "next/dynamic";
import { MouseScrollAnimation } from "@/assets/lottie";
import anime from "animejs";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AboutUs: React.FC = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: sectionRef.current,
              opacity: [0, 1], // Fade in effect
              translateY: [-20, 0], // Move up effect
              duration: 1000,
              easing: "easeOutQuad",
            });
          } else {
            // Reset the opacity to 0 when the element leaves the view
            anime({
              targets: sectionRef.current,
              opacity: 0,
              duration: 300, // Quickly fade out when scrolling out of view
              easing: "easeOutQuad",
            });
          }
        });
      },
      { threshold: 0.7 } // Trigger when 10% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="yes"
      className="flex flex-col items-center w-full px-10 justify-center gap-6 py-6 min-h-full opacity-0" // Initial opacity 0 for the fade-in effect
    >
      <Image src={aboutUsImage} alt="About Us" width={500} height={300} />

      <GradientText text="Teo Portfolio" />
      <a href="#about">
        <div className="pt-[80px] w-[50px] md:w-[60px] cursor-pointer">
          <Lottie animationData={MouseScrollAnimation} loop={true} />
        </div>
      </a>
    </section>
  );
};

export default AboutUs;
