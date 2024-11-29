"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosSetup = () => {
    useEffect(()=>{
        AOS.init({
            once: false,
            duration: 1200,
        });
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AosSetup;