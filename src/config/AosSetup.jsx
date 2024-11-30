"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosSetup = () => {
    useEffect(()=>{
        AOS.init({
            once: true,
            duration: 1000,
        });
    },[])
    return <>
    </>
};

export default AosSetup;