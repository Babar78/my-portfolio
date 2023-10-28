import React from "react";
import styles from "./HeroSectionText.module.css";
function HeroSectionText() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.title}>
          <span className={styles.block}></span>
          <h1 className={styles.heading}>
            Hi, I'm <br />
            Muhammad Babar<span className={`${styles.headingSpan}`}></span>
          </h1>
        </div>

        <div className={`${styles.role} mb-5`}>
          <div className={`${styles.block} mt-3`}></div>
          <p className={`${styles.para} mt-3`}>
            Unleashing Creativity in the Digital Realm.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSectionText;
