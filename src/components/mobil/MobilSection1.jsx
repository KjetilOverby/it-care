import React from "react";
import styles from "../../../styles/Mobil.module.css";

function MobilSection1() {
  return (
    <div className={styles.mobilSection1Container}>
      <div className={styles.section1Text}>
        <p className={styles.pText}>vi tilhører Mobit kjeden.</p>
        <p className={styles.pText1}>
          I Mobit er vi spesialister på mobil og IT for bedriftsmarkedet. Vi har
          forhandlere over hele landet, og vårt mål er å hjelpe våre kunder med
          alt de har behov for i sin digitale hverdag.
        </p>
        <p className={styles.pText}>
          Navnet vårt er nytt, men som kjede har vi eksistert i 25 år. Siden
          starten med Telering har utviklingen vært rivende, og vi har hele
          tiden vært opptatt av å være i forkant av de behovene som oppstår som
          følge av de teknologiske endringene. I dag kan man ikke lenger skille
          IT og mobil fra hverandre – alt må samhandle sømløst for å utnytte de
          digitale mulighetene.
        </p>
        <p className={styles.pText}>
          Når vi nå blir Mobit er det et resultat av en sammenslåing av Telering
          og flere IT- og mobilkjeder, blant annet Telehuset, Mobildata, Comunit
          og Nordialog.
        </p>
        <p className={styles.pText}>
          Mobit er den eneste uavhengige og landsdekkende aktøren som tilbyr
          tjenester og nett fra både Telia og Telenor. Vi har også et bredt
          utvalg leverandører av IT-løsninger og hardware, slik sett vil vi
          alltid kunne gi våre kunder de beste uavhengige rådene.
        </p>
      </div>

      <img
        className={styles.section1Img}
        src="https://www.realestate-tokyo.com/media/8985/phone-shops.jpg"
        alt=""
      />
    </div>
  );
}

export default MobilSection1;
