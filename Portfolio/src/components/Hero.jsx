import React from "react";
import styles from "../style";
import { discount, robot } from "../assets/assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-ceneter py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20% Discount for 1 Month</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-ceneter w-full">
          <h1 className="flex-1 font-poppins font-semibod ss:text-[40px] text-[30px] text-white">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span> Payment Method
          </h1>
          <div className="ss: flex hidden: md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
