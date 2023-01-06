import React from "react";
import "./Planet.css";
import { FaHandPointRight } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
function Planet ()
{
  return (
    <>
      <section className="container-fluid planet-container py-5">
        <div className="planet-content-div">
          <h1 className="h1 text-center cu">
            "Travelerse with the worlds most unique ACM and NFT utility gives
            holders returns impossible for another crypto currently on the
            planet."
          </h1>
        </div>
      </section>

      <section className="earn-section container-fluid py-5">
        <h1 className="earn-h1 h1 text-center">
          How Much Can I Expect in this Lock-to-Earn?
        </h1>
        <div className="earn-content-div pt-5">
          <div className="row">
            <div className="col-5">
              <h2 className="h2 text-center earn-h2">
                At the end of 12 months, and with{" "}
                <span className="earn-span cu">US$100</span> of $TRAVELERSE
                invested,
              </h2>
            </div>

            <div className="col-2">
              <div className="d-flex justify-content-center align-items-center">
                <FaHandPointRight className="earn-icon" />
              </div>
            </div>

            <div className="col-5">
              <h2 className="h2 text-center earn-h2">
                you can earn up to
                <span className="earn-span cu">US$213,139.27</span> of $TRAVELERSE
                at
                <span className="earn-span cu">213,139.27%</span> APY*.
              </h2>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <a href="void:" className="earn-btn-item">
              <span>
                <BsFillArrowRightCircleFill className="me-2" />
              </span>
              Click to Buy Travelerse
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Planet;
