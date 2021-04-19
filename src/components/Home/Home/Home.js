import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import TopBar from "../../TopBar/TopBar";
import Banner from "../Banner/Banner";
import Boat from "../Boat/Boat";
import CallToAction from "../CallToAction/CallToAction";
import Feature from "../Feature/Feature";
import Review from "../Review/Review";

const Home = () => {
  return (
    <main>
      <TopBar />
      <Header />
      <Banner />
      <Feature />
      <CallToAction />
      <Boat />
      <Review />
      <Footer />
    </main>
  );
};

export default Home;
