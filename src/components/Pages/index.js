import React from "react";
import AboutMe from "../About/aboutme";
import AboutTampa from "../About/abouttampa";
import Home from "../Home";

function Pages({ currentPage }) {
    const renderPage = () => {
        switch(currentPage.name) {
            case 'AboutMe':
                return <AboutMe />;
            case 'AboutTampa':
                return <AboutTampa />;
            default:
                return <Home />;
        }
    }
    return (
        <div>
            {renderPage()}
        </div>
    )
};

export default Pages;