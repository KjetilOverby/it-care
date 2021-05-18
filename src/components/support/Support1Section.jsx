import React from "react";
import styles from "../../../styles/Support.module.css";

function Support1Section() {
  return (
    <div className={styles.support1Section}>
      <h1 className={styles.header}>Support/Fjernstyring</h1>
      <h1 className={styles.header1}>Hva er dette?</h1>
      <div className={styles.text1}>
        <p className={styles.pText}>
          Vi tilbyr fjernstyring (fjernhjelp) av maskinene slik at vi kan
          analysere og rette flere problemer og feil, eller gi deg brukerstøtte
          og hjelp til mer daglige problemer uten å måtte møte opp hos deg som
          kunde. Hvordan vet jeg at det er sikkert for meg som kunde? Det er
          viktig for oss at din sikkerhet ivaretas når vi tar over kontroll på
          maskinen. Følgende tiltak er derfor på plass ved bruk av fjernstyring
          :
        </p>
        <ul>
          <li className={styles.liText}>
            Du ser alltid alt vi ser på din maskin.
          </li>
          <li className={styles.liText}>
            Du kan når som helst styre musen og ta over kontroll på maskinen.
          </li>
          <li className={styles.liText}>
            Alt skjer via en sikker tilkobling med kryptering på forbindelsen.
          </li>
          <li className={styles.liText}>
            Ingen programvare installeres på din maskin, men kjøres direkte.
          </li>
        </ul>
      </div>

      <img
        className={styles.img1}
        src="https://rosenhof.oslovo.no/siteassets/-forside-/nyheter/2019-2020/it-support.jpg"
        alt=""
      />
    </div>
  );
}

export default Support1Section;
