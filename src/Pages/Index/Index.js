import React, { useState } from "react";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Components/Header/Header";
import LatestCourses from "../../Components/latestCourses/LatestCourses";
import AboutUsSection from "../../Components/AboutUsSection/AboutUsSection";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import Article from "./../../Components/Article/Article";
import Footer from "../../Components/Footer/Footer";

import productContext from "../../Components/Context/ProductContext";

export default function Index() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <productContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
      }}
    >
      <Header />
      <LatestCourses />
      <AboutUsSection />
      <PopularCourses />
      <Article />
      <Footer />
    </productContext.Provider>
  );
}
