import React, { useEffect, useState } from "react";
import "./loader.css";
import Lottie from "react-lottie";
import soccerLoading from "../../lotties/soccer-loading.json";

function Loader() {
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);
  return (
    <>
      <>
        {loading && (
          <div className="main-loader ">
            <div className="loader">
              <Lottie options={lottieAnimation} className="loader-lottie" />
            </div>
          </div>
        )}
      </>
    </>
  );
}

export default Loader;
