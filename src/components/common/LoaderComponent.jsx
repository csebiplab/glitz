"use client"
import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const LoaderComponent = ()=> {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {/* <h1>Welcome to My Next.js App</h1> */}
    </div>
  );
}
export default LoaderComponent;
