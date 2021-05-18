import React from "react";
import styles from "../../../styles/ImageSection.module.css";

function ImageSection() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>IT Care AS</h1>
        <h4 className={styles.subHeader}>-forenkler din digitale hverdag</h4>
        <p className={styles.text}>
          IT Care AS ble startet høsten 2005 med en målsetting om at vi skulle
          være totalleverandør for små- og mellomstore bedrifter og på
          privatmarkedet. Vårt mål er å ha høy kvalitet på varer, tjenester og
          sette kunden i fokus. Alle ansatte har lang fartstid innen IT, og gir
          gjerne råd og tips. Vi hjelper med å finne løsninger som passer
          innenfor TV, PC, Parabol, mobiltelefon, og montering.
        </p>
        <button className={styles.btn}>Ta kontakt</button>
      </div>
    </div>
  );
}

export default ImageSection;
