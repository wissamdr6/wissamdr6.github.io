import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const experiences = this.props.sections[0]?.experiences || [];

    return (
      <div className="experience-accord">
        {experiences.map((experience, index) => (
          <div key={index} style={{ marginTop: index === 0 ? "50px" : "20px" }}>
            <ExperienceCard
              index={index}
              totalCards={experiences.length}
              experience={experience}
              theme={theme}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
