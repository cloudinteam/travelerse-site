import React from "react";
import "./Safe.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import safe from "../../assets/images/safe/graph-bounce-3.png";
import {
  BsFillBookmarkCheckFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Lottie from "react-lottie";
import soccerLoading from "../../lotties/soccer-fans-1.json";

function Safe() {
  const lottieAnimation = {
    loop: true,
    autoplay: true,
    animationData: soccerLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      id: "loader-lottie-id",
      className: "loader-lottie-id",
    },
  };

  return (
    <>
      <section className="safe-container container-fluid py-5">
        <h1 className="h1 text-center fw-bold pb-4">
          How The World's Best ACM Keeps Your Investment Safe!
        </h1>
        {/* <div className="safe-img-div mx-auto">
          <img src="images\limit 22-01.png" alt="img" className="safe-img" />
        </div> */}

        <div className="safe-content-div">
          <div className="row">
            <div className="col-lg-5 col-12 d-flex align-items-center justify-content-center">
              <AnimationOnScroll animateIn="animate__bounceInLeft">
                <div className="safe-img-div-1 mb-5">
                  {/* <img src={safe} alt="img" className="safe-img-1 img-fluid " /> */}
                  <Lottie
                    options={lottieAnimation}
                    className="loader-lottie"
                    width={280}
                  />
                </div>
              </AnimationOnScroll>
            </div>

            <div className="col-lg-7 col-12 d-flex align-items-center justify-content-center">
              <AnimationOnScroll animateIn="animate__bounceInRight">
                <ul className="safe-ul">
                  <li className="h5 mt-3 text-justify">
                    <span className="cu me-3">
                      <BsFillBookmarkCheckFill />
                    </span>
                    Join Travelerse now to earn our great NFTs.
                  </li>
                  <li className="h5 mt-3 text-justify">
                    <span className="cu me-3">
                      <BsFillBookmarkCheckFill />
                    </span>
                    Impossibility of extreme dump with Travelerse, because of
                    our ACM.
                  </li>
                  <li className="h5 mt-3 text-justify">
                    <span className="cu me-3">
                      <BsFillBookmarkCheckFill />
                    </span>
                    Unlike other crypto there is a 3-7% cash out limit per day
                    of your total tokens safeguarding your hard earned money.
                  </li>
                  <li className="h5 mt-3 text-justify">
                    <span className="cu me-3">
                      <BsFillBookmarkCheckFill />
                    </span>
                    The Anti-Crash Mechanism works based on the current metrics
                    of the chart to determine the daily withdrawal limit.
                  </li>
                  <li className="h5 mt-3 text-justify">
                    <span className="cu me-3">
                      <BsFillBookmarkCheckFill />
                    </span>
                    You as a small investor would achieve financial freedom,
                    faster!
                  </li>
                </ul>
              </AnimationOnScroll>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4 pt-4">
            <a href="#" rel="noreferrer" className="pt-2 earn-btn-item">
              <span className="me-2">
                <BsFillArrowRightCircleFill />
              </span>
              Join Our Telegram Community
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Safe;
