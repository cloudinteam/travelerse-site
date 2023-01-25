import React from "react";
import "./card.css";
import { BsCheckLg } from "react-icons/bs";
import silver from "../../assets/images/post/SILVER.png";
import gold from "../../assets/images/post/GOLD.png";
import diamond from "../../assets/images/post/DIAMOND.png";

function Card() {
  return (
    <>
      <section className="container-fluid card-section py-5">
        <h2 className="h1 text-center text-white">NFT - Tiers and Benefits</h2>
        <div className="card-content-div mt-5">
          <div className="row">
            <div className="col-md-4 col-12">
              <div class="card card-items h-100">
                <img
                  src={silver}
                  class="card-img-top img-responsive"
                  alt="img"
                />
                <div class="card-body">
                  <h5 class="card-title">Silver Series NFT (Presale NFT)</h5>
                  <hr className="bg-white" />
                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Access to Travelerse Club Membership
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Priority to join Travelerse World (T Metaverse)
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Additional air drops every month
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Private Members Parties
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    20% discount on all Travelerse Merchandise
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12 my-md-0 my-4">
              <div class="card card-items h-100">
                <img src={gold} class="card-img-top img-responsive" alt="img" />
                <div class="card-body">
                  <h5 class="card-title">Gold Series NFT</h5>
                  <hr className="bg-white" />
                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Silver Series benefits
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Exclusive Travel Vouchers Giveaways
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    10% discount on future NFTs
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Priority whitelisting of future apps
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    25% discount on all Travelerse Merchandise
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div class="card card-items h-100">
                <img
                  src={diamond}
                  class="card-img-top img-responsive"
                  alt="img"
                />
                <div class="card-body">
                  <h5 class="card-title">Diamond Series NFT</h5>
                  <hr className="bg-white" />
                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Silver & Gold Series benefits
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Preferential access and voting to future apps
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    20% discount on future NFTs
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    Priority access to members parties
                  </p>

                  <p class="card-text">
                    <span>
                      <BsCheckLg className="me-2 card-icon" />
                    </span>
                    35% discount on all Travelerse Merchandise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
