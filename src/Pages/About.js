import React from "react";
import Banner from "../Components/Banner/Banner";
import AboutBanner from "../assets/about_banner.jpg";
import datas from "../datas/about_data.js";
import Collapse from "../Components/Collapse/Collapse";
const About = () => {
  return (
    <div className="about">
      <div className="banner_about">
        <Banner image={AboutBanner} alt="image bannière" />
      </div>
      <div className="collapse_about_container column center">
        {datas.map((abouts) => (
          <Collapse
            collapse_about="collapse_about"
            key={abouts.id}
            about={{ title: abouts.title, text: abouts.text, list: false }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
