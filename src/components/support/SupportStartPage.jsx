import React from "react";
import Support1Section from "./Support1Section";
import styles from "../../../styles/Support.module.css";
import Support2Section from "./Support2Section";
import Support3Section from "./Support3Section";
import Support4Section from "./Support4Section";

function SupportStartPage() {
  return (
    <div className={styles.container}>
      <Support1Section />
      <Support2Section />
      <Support3Section />
      <Support4Section />
    </div>
  );
}

export default SupportStartPage;
