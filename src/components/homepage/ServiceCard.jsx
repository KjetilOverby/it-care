import React from "react";
import styles from "../../../styles/ServiceCard.module.css";

function ServiceCard({ icon, title, li1, li2, li3, li4 }) {
  return (
    <div className={styles.container}>
      {icon}
      <h2 className={styles.header}>{title}</h2>
      <ul>
        <li className={styles.liText}>{li1}</li>
        <li className={styles.liText}>{li2}</li>
        <li className={styles.liText}>{li3}</li>
        {li4 && <li className={styles.liText}>{li4}</li>}
      </ul>
    </div>
  );
}

export default ServiceCard;
