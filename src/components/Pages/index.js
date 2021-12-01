import React from "react";
import AboutMe from "../About/aboutme";
import AboutTampa from "../About/abouttampa";
import Hero from "../hero";

function Pages({ currentPage }) {
    const renderPage = () => {
        switch(currentPage.name) {
            case 'AboutMe':
                return <AboutMe />;
            case 'AboutTampa':
                return <AboutTampa />;
            default:
                return <Hero />;
        }
    }
    return (
        <div>
            {renderPage()}
        </div>
    )
};

export default Pages;