"use client"

const JsonLd = () => {

    const contextSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Glitz Floors And More",
        "url": "https://www.glitzfloorsandmore.com",
        "logo": "https://www.glitzfloorsandmore.com/_next/image?url=%2Fassets%2Fglitz%2FnewHomePage%2Fnav%2Fnav__logo__glitz.png&w=384&q=75",
        "description": "Refresh Your Home This Summer",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "16726 Huffmeister Rd D400",
            "addressLocality": "Cypress",
            "addressRegion": "ON",
            "postalCode": "TX 77429",
            "addressCountry": "United States"
        },
        "telephone": "+1-281-758-5450",
        "openingHours": "Mo-Sa 09:00-18:00",
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "29.995459",
            "longitude": "-95.6768463"
        },
        "sameAs": "https://g.co/kgs/dFR7JFP",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+1-281-758-5450",
            "email": "info@glitzfloors&more.us"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(contextSchema) }}
        />
    );
};

export default JsonLd;
