import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  return (
    <section
      id="contact"
      className="flex justify-center w-full pt-[80px] pb-[200px]"
    >
      <div className="w-full rounded-lg bg-[#252525] mx-12 p-3 py-12 px-8">
        <div
          style={{
            fontSize: "2em",
            background: "linear-gradient(to bottom, #ffffff 50%, #FFC0CB 50%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="font-bold text-center md:!text-[3em]"
        >
          <h1>Get In Touch</h1>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="mailto:teoyutong28@gmail.com"
            className="rounded-full px-3 py-1 border text-[12px] md:!text-[20px] border-white cursor-pointer hover:border-[#FFC0CB] hover:text-[#FFC0CB] transform hover:scale-105 transition-all duration-300"
          >
            teoyutong28@gmail.com
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/teo-yu-tong-878792305/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="text-white-800 hover:text-gray-400"
            />
          </a>
          <a
            href="https://github.com/Yt-pp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="text-white-800 hover:text-gray-400"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
