import React from "react";
import styles from "../../../styles/Mobil.module.css";
import MobilSection1 from "./MobilSection1";
import MobilSection2 from "./MobilSection2";

function MobilStartPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Mobil</h1>
      <MobilSection1 />
      <MobilSection2 />
    </div>
  );
}

export default MobilStartPage;
