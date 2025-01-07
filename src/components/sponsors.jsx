import React from "react";
import "./sponsors.css"; // Make sure to use this CSS file for styling

const sponsorsData = [
  { id: 1, name: "Sponsor A", logo: "/Glogo.png" },
  { id: 2, name: "Sponsor B", logo: "/Glogo.png" },
  { id: 3, name: "Sponsor C", logo: "/Glogo.png" },
  { id: 4, name: "Sponsor D", logo: "/Glogo.png" },
  { id: 5, name: "Sponsor E", logo: "/Glogo.png" },
  { id: 6, name: "Sponsor F", logo: "/Glogo.png" },
  { id: 7, name: "Sponsor G", logo: "/Glogo.png" },
  { id: 8, name: "Sponsor H", logo: "/Glogo.png" },
];

const Sponsors = () => {
  return (
    <div className="marquee-container">
      <div className="sponsors-list">
        {sponsorsData.map((sponsor) => (
          <div key={sponsor.id} className="sponsor-pill">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="sponsor-logo"
            />
            <span className="sponsor-name">{sponsor.name}</span>
          </div>
        ))}
        {/* Duplicate the content for seamless scrolling */}
        {sponsorsData.map((sponsor) => (
          <div key={`duplicate-${sponsor.id}`} className="sponsor-pill">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="sponsor-logo"
            />
            <span className="sponsor-name">{sponsor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
