"use client";
import React, { useState, useEffect } from "react";
import "./Slider.css"; // Assuming the CSS is stored separately

const Slider = () => {
  const [selectedSlide, setSelectedSlide] = useState("s3");

  const handleChange = (e) => {
    setSelectedSlide(e.target.id);
  };

  const images = [
    "vrsec.jpg",
    "vrsec.jpg",
    "vrsec.jpg",
    "vrsec.jpg",
    "vrsec.jpg", // Replace with your image paths
  ];

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = parseInt(selectedSlide.replace("s", ""), 10);
      const nextIndex = (currentIndex % images.length) + 1;
      setSelectedSlide(`s${nextIndex}`);
    }, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [selectedSlide, images.length]);

  return (
    <section id="slider">
      {images.map((_, index) => (
        <input
          type="radio"
          name="slider"
          id={`s${index + 1}`}
          key={`s${index + 1}`}
          checked={selectedSlide === `s${index + 1}`}
          onChange={handleChange}
        />
      ))}
      {images.map((image, index) => (
        <label
          htmlFor={`s${index + 1}`}
          id={`slide${index + 1}`}
          key={`slide${index + 1}`}
          style={{ backgroundImage: `url(${image})` }}
        ></label>
      ))}
    </section>
  );
};

export default Slider;
