import React, { useEffect, useState } from "react";
import patternMobile from "../assets/pattern-divider-mobile.svg";
import patternDesktop from "../assets/pattern-divider-desktop.svg";
import iconDice from "../assets/icon-dice.svg";

const AdviceCard = () => {
  const [adviceSlip, setIsAdviceSlip] = useState({
    advice: "",
    id: 0,
  });
  const url = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    try {
      const res = await fetch(url);
      const { slip } = await res.json();
      setIsAdviceSlip(slip);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="advicecard-bg">
      <div class="spinner-border text-info" role="status">
        {/* <span class="sr-only">Loading...</span> */}
      </div>

      <div className="advice-text">
        <h1>ADVICE #{adviceSlip.id} </h1>
        <p>"{adviceSlip.advice} "</p>
        <img
          className="pattern-mobile"
          src={patternMobile}
          alt="pattern-divider"
        />
        <img
          className="pattern-desktop"
          src={patternDesktop}
          alt="pattern-divider"
        />
      </div>

      <button className="dice-round" onClick={getAdvice}>
        <img src={iconDice} alt="icon Dice" />
      </button>
    </div>
  );
};

export default AdviceCard;
