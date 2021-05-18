import React from "react";
import styles from "../../../styles/Mobil.module.css";

function MobilSection2() {
  return (
    <div className={styles.mobilSection2Container}>
      <h1>Fakta</h1>
      <div className={styles.section2Text}>
        <p className={styles.pText}>
          I dag er det mer enn 30 forhandlere som bærer Mobit-navnet. I tillegg
          har vi nærmere 100 Mobit-medlemmer, og er derved den største
          forhandlerkjeden innen mobil og IT til bedriftsmarkedet. Kjeden har
          ca. 400 ansatte fordelt over hele landet. Samlet omsetning i 2017 var
          2 mrd NOK. Kjeden har solide og industrielle eiere, solid egenkapital
          og solide partnere.
        </p>
        <h1>Vårt kundeløfte</h1>
        <p className={styles.pText}>
          Det viktigste for oss er å bidra til å gjøre din digitale hverdag
          enkel, oppdatert og problemfri. Det innebærer at vi tar utgangspunkt i
          dine behov og finner de beste løsningene som passer din bedrift.
        </p>
        <p className={styles.pText}>
          Mobit er landsdekkende og har sertifisert kompetanse på både IT og
          telefoni, derfor kan vi gi deg den beste service og sikre at du alltid
          har de løsningene som er riktige for deg.
        </p>
      </div>
      <img
        className={styles.section2Img}
        src="https://450olkmorw01r21bt2q7fzvj-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/mobit_thumbnail_no_glitch_q75.jpg"
        alt=""
      />
    </div>
  );
}

export default MobilSection2;
