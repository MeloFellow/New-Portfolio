import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          HELLO
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={` ${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={` ${styles.boxWidth}`}>STATS</div>
      </div>

      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
