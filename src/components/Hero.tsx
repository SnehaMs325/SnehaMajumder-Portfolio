
import React from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroCutout from "../assets/hero-cutout.png";

const Marquee = ({
  text,
  direction,
}: {
  text: string;
  direction: "left" | "right";
}) => (
  <div className="hero-marquee" aria-label={text}>
    <div
      className={`hero-marquee-track ${
        direction === "right" ? "move-right" : "move-left"
      }`}
      aria-hidden="true"
    >
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} className="hero-marquee-copy">
          {text} <span className="hero-star">✳</span>&nbsp;
        </span>
      ))}
    </div>
  </div>
);

export const Hero: React.FC<{ data?: unknown }> = () => {
  return (
    <section
      id="home"
      className="editorial-hero"
    >
      <div className="hero-intro">
        <span className="hero-eyebrow">HELLO, I'M</span>
        <h1>SNEHA MAJUMDER</h1>
        <p>
          B.Tech Student · Data & Machine Learning
          · Creative at Heart
        </p>
      </div>

      <div className="hero-stage">
        <div className="hero-marquee-lines">
          <Marquee text="CODE & CURIOSITY" direction="right" />
          <Marquee text="ART & MELODY" direction="left" />
        </div>

        <img
          src={heroCutout}
          alt="Sneha Majumder"
          className="hero-portrait"
        />
      </div>

      <div className="hero-bottom">
        <a href="#projects" className="hero-project-link">
          EXPLORE MY WORK <ArrowDown size={17} />
        </a>

        <div className="hero-socials">
          <a
            href="https://github.com/SnehaMs325"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={21} />
          </a>
          <a
            href="https://www.linkedin.com/in/sneha-majumder-tech001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={21} />
          </a>
          <a
            href="mailto:snehamsofficial@gmail.com"
            aria-label="Email"
          >
            <Mail size={21} />
          </a>
        </div>
      </div>
    </section>
  );
};
