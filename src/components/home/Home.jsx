// import library
import React from "react";

// import components
import Header from "./Header";
import LeftContent from "./LeftContent";
import Footer from "./Footer";

// init component
const Home = () => {
    return (
        <main className="container-fluid d-flex flex-row  ">
            <section className="">
                <Header />
            </section>
            <section>
                <LeftContent />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    );
};

// export component
export default Home;
