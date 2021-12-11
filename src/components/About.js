import React from "react";
import "../components/About.css";

const About = () => {
  return (
    <div class="about-section">
      <h1
        className="about_title
      "
      >
        About Us
      </h1>
      <h2 className="about_subtitle">
        Some text about animals and their images.
      </h2>
      <p className="content_text">
        The word animal comes from the Latin animalis, meaning 'having
        breath','having soul' or 'living being'. The biological definition
        includes all members of the kingdom Animalia. In colloquial usage, the
        term animal is often used to refer only to nonhuman animals.(Wikipedia)
      </p>
    </div>
  );
};

export default About;
