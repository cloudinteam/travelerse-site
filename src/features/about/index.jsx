import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Button from "../../components/button";
import AboutItem from "./about-item";
import scrollToTop from "../../ScrollToTop";
About.propTypes = {
  data: PropTypes.array,
};

function About(props) {
  const { data } = props;

  const [dataBlock] = useState({
    subtitle: "About us",
    title: "What is ACM?",
    desc: "Financial freedom is everyone’s dream these days, We at TRAVELERSE not only allow you to achieve this dream but also help you in traveling and exploring this beautiful world of ours - The Garden of Eden. The law of compounding will get you there. You can easily double your investment every 40 DAYS with our amazing 106.7% interest. Which possibly allows you to turn $100 into $213,139 dollars within just 12 months.",
  });

  return (
    <section className="tf-section tf-about">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-12">
            <div
              className="content-about mobie-40"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="tf-title st2">
                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                <h4 className="title">{dataBlock.title}</h4>
              </div>
              <p className="text-justify">{dataBlock.desc}</p>
              <Button
                title="CLick to Buy Travelarse"
                path="/"
                onClick={scrollToTop}
              />
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div
              className="wrap-about"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              {data.map((item) => (
                <AboutItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
