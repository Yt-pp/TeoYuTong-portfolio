"use client";
import anime from "animejs";
import React, { useEffect, useRef } from "react";

function Intro() {
  const aboutRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for the section fade-in and scroll-out effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section animation when it enters view
            anime({
              targets: aboutRef.current,
              opacity: [0, 1], // Fade in effect
              translateY: [-20, 0], // Move up effect
              duration: 1500,
              easing: "easeOutQuad",
            });

            // Animate text only when the section is in view
            const textWrapper = textRef.current;
            if (textWrapper) {
              textWrapper.innerHTML = textWrapper.textContent!.replace(
                /\S/g,
                "<span class='letter'>$&</span>"
              );
               // Apply gradient style to each letter
               const letters = document.querySelectorAll(".letter");
               letters.forEach((letter) => {
                 (letter as HTMLElement).style.background = "linear-gradient(to bottom, white 50%, #FFC0CB 50%)";
                 (letter as HTMLElement).style.webkitBackgroundClip = "text";
                 (letter as HTMLElement).style.color = "transparent";
               });

             // Anime.js timeline
             anime.timeline()
             .add({
               targets: ".ml3 .letter",
               opacity: [0, 1],
               easing: "easeInOutQuad",
               duration: 300,
               delay: (el, i) => 25 * (i + 1),
             })
           
             .add({
              targets: text2Ref.current,
              opacity: [0, 1], // Fade-in effect
              duration: 400, // Duration of the animation
              easing: "easeOutQuad",
              offset: '+=10', // Slight delay after the previous animation
            });
            }
           
      
          } else {
            // Reset the section opacity when it leaves view
            anime({
              targets: aboutRef.current,
              opacity: 0,
              duration: 300, // Quickly fade out when scrolling out of view
              easing: "easeOutQuad",
            });
          }
        });
      },
      { threshold: 0.5 } // Trigger when 30% of the section is in view
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <section ref={aboutRef} id="about">
      <div className="rounded-lg bg-[#252525] mx-12 p-3 grid grid-cols-1 md:grid-cols-2 py-[80px] px-8 gap-12 my-12">
        <div
          ref={textRef}
          style={{
            fontSize: "3em",
          }}
          className="ml3 font-bold"
        >
          <h1>Hi, I'm Teo Yu Tong, a Software Developer</h1>
          
        </div>
        <h1 ref={text2Ref} className="text-[24px]">
          I'm a recent graduate from TARUMT, eager to apply my skills in a
          professional setting. I'm passionate about contributing to a company's
          success and ready to take on new challenges to further develop my
          expertise.
        </h1>
      </div>
    </section>
  );
}

export default Intro;
