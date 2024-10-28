import React, { useEffect, useRef } from "react";
import anime from "animejs";
import './text.css'

interface GradientTextProps {
  text: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ text }) => {

  return (
    <section>
      <div className="content whitespace-nowrap" style={{letterSpacing:' 0.2em'}}>
        <h2 className="ml3 font-bold">{text}</h2>
        <h2 className="ml3 font-bold">{text}</h2>
      </div>
    </section>
  );
};
