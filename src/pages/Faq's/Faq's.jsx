import React from "react";
import Banner from "../../Components/Banner";
import FaqInfo from "./Faq'sInfo";
import NewsInfo from "../about/NewsInfo";

const Faq = () => {
  return (
    <div>
      <div className="contact-container">
        <Banner title="Faq's"/>
        <FaqInfo / >
        <NewsInfo />
      </div>
    </div>
  );
};

export default Faq;
