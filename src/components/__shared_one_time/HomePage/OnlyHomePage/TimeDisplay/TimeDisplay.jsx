"use client";
import { useState, useEffect } from "react";

const slideData = [
  "0% Interest Financing Available",
  "Ask About 0% Interest Financing with Synchrony Bank",
  "FLOORS NOW, PAY OVER TIME",
  "Convenient monthly payments to fit your budget"
];

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Update time every second
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Change slide every second
    const slideIntervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 1000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(timeIntervalId);
      clearInterval(slideIntervalId);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Current Time</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
      <h2>Slide Text</h2>
      <p>{slideData[currentSlideIndex]}</p>
    </div>
  );
};

export default TimeDisplay;
