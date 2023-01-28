import React from "react";
import "./Work.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaUserLock, FaPiggyBank } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { AiTwotoneFire } from "react-icons/ai";
function NewWork() {
  return (
    <>
      <section className="container-fluid py-5">
        <h1 className="h1 work-title fw-bold text-center">HOW IT WORKS</h1>
        <h3 className="h5 w-75 mx-auto text-center fw-bolder">
          Worlds most-unique <span className="cu">A</span>nti-
          <span className="cu">C</span>rash <span className="cu">M</span>
          echanism with first-of-its kind NFT utility.
        </h3>

        <div className="work-content-div" id="work-content-div">
          <div className="row">
            <div className="col-md-6 col-12">
              {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
              <div
                className="work-div-1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="work-icon-div my-4 d-flex justify-content-center">
                  <FaUserLock className="work-icon" />
                </div>
                <h3 className="work-h3 h3 text-center fw-bold mb-3">
                  Whales Can't crash the coins, resulting in a{" "}
                  <sp className="cu">safe investment</sp>
                </h3>
                <ul className="px-md-3 px-1 work-ul">
                  <li className="h5 mb-3 text-justify">
                    Just like an ATM machine has a max withdrawal limit each
                    day, $TRAVELERSE also has a max cashout limit on all
                    holders, to prevent unnecessary dumps.
                  </li>
                  <li className="h5 mb-3 text-justify">
                    Investors cannot dump the coin because they have a{" "}
                    <span className="cu">
                      strict cashout limit of up to 3-7% per day
                    </span>
                    .
                  </li>
                  <li className="h5 mb-3 text-justify">
                    This puts a stop to unessential dumps because investors are
                    unable to sell ALL their tokens overnight.
                  </li>
                  <li className="h5 mb-3 text-justify">
                    Instead, they need to sell small quantities over time,
                    keeping the price and chart steady and healthy.
                  </li>
                </ul>
              </div>
              {/* </AnimationOnScroll> */}
            </div>

            <div className="col-md-6 col-12">
              {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
              <div
                className="work-div-2"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="work-icon-div my-4 d-flex justify-content-center">
                  <HiLockClosed className="work-icon" />
                </div>
                <h3 className="work-h3 h3 text-center fw-bold mb-3">
                  The <span className="cu">Safest</span> Crypto NFT Coin
                </h3>
                <ul className="px-md-3 px-1 work-ul">
                  <li className="h5 mb-3 text-justify">
                    With a safe investment TRAVELERSE also provides the
                    investors with the greatest traveling{" "}
                    <span className="cu">NFTs</span> with amazing benefits
                  </li>
                  <li className="h5 mb-3 text-justify">
                    Nobody can dump ALL their coins at the top because of the
                    strict daily sales limit.
                  </li>
                  <li className="h5 mb-3 text-justify">
                    Because of the new technology:{" "}
                    <span className="cu">DeFi Anti-Crash Lock Mechanism</span>{" "}
                    that automatically protects your investment when there’s too
                    much sales pressure. In every other coin this would create a
                    crash but with Travelerse the blockchain determines a
                    sliding sales limit of 3-7% per day of total tokens that can
                    be sold.
                  </li>
                  <li className="h5 mb-3 text-justify">
                    This means NO CRASH, a healthy chart, and even parabolic
                    growth.
                  </li>
                </ul>
              </div>
              {/* </AnimationOnScroll> */}
            </div>

            <div className="col-md-6 col-12">
              {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
              <div
                className="work-div-1"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="work-icon-div my-4 d-flex justify-content-center">
                  <FaPiggyBank className="work-icon" />
                </div>
                <h3 className="work-h3 h3 cu text-center fw-bold mb-3">
                  Travelerse: Treasury
                </h3>
                <ul className="px-md-3 px-1 work-ul">
                  <li className="h5 mb-3 text-justify">
                    The Treasury provides support to the Travelerse Insurance
                    Fund (TIF) to help pump up the chart for the $TRAVELERSE
                    token. The (TIF) also funds investments, new Travelerse
                    projects, and Travelerse marketing.
                  </li>
                </ul>
              </div>
              {/* </AnimationOnScroll> */}
            </div>

            <div className="col-md-6 col-12">
              {/* <AnimationOnScroll animateIn="animate__bounceIn"> */}
              <div
                className="work-div-2"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
              >
                <div className="work-icon-div my-4 d-flex justify-content-center">
                  <AiTwotoneFire className="work-icon" />
                </div>
                <h3 className="work-h3 h3 cu text-center fw-bold mb-3">
                  Travelerse: Token Burn
                </h3>
                <ul className="px-md-3 px-1 work-ul">
                  <li className="h5 mb-3 text-justify">
                    With 3.5% of all $TRAVELERSE tokens being burned in the
                    high-burn system, the more trading volume, the more burned,
                    reducing the circulating supply and keeping the Travelerse
                    protocol stable.
                  </li>
                </ul>
              </div>
              {/* </AnimationOnScroll> */}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="telegram-section container-fluid py-5">
        <div className="telegram-content-div d-flex flex-md-row flex-column justify-content-around align-items-center">
          <div>
            <h1 className="telegram-h1">
              <span className="me-4 cu">
                <FaTelegram />
              </span>
              Join Our Telegram Community
            </h1>
          </div>

          <div className="d-flex justify-content-center mt-md-0 mt-4">
            <a href="#" className="btn-item">
              <span className="me-2">
                <BsFillChatDotsFill />
              </span>
              Chat Now
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default NewWork;
