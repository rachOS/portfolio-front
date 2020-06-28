// import library
import React from "react";

// import components
import Header from './Header'
import LeftContent from './LeftContent'
import Footer from './Footer'

// init component
const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <LeftContent/>
            <Footer/>
        </div>
    );
};

// export component
export default Home;
