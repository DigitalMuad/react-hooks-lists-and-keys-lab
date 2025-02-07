import React from "react";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 0 ? <p>{bio}</p> : null}  {/* Ensuring bio is not empty */}
      <img 
        src="https://i.imgur.com/mV8PQxj.gif" 
        alt="Animated gif showing a creative work" 
      />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;