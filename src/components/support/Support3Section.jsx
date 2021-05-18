import React from "react";
import styles from "../../../styles/Support.module.css";

function Support3Section() {
  return (
    <div className={styles.support3Section}>
      <h1 className={styles.header3}>Tjenester via fjernhjelp</h1>
      <div className={styles.text3}>
        <ul className={styles.ulSection3}>
          <li>
            Installering/Oppgradering av antivirus, antispyware og andre
            applikasjoner.
          </li>
          <li>
            Installering av systemoppdateringer, slik som servicepakker og
            sikkerhetsoppdateringer.
          </li>
          <li>Installering av skrivere og skannere</li>
          <li>
            Vedlikeholdssjekk av ditt system hvor vi kontrollerer at ditt system
            er oppdatert med siste versjoner på oppdateringer.
          </li>
          <li>Oppsett av epost-kontoer</li>
          <li>Oppsett/sikring av trådløse nettverk</li>
          <li>Generell bruk, oppsett og feilsøking på din/dine datamaskiner</li>
        </ul>
      </div>
      <img
        className={styles.img3}
        src="https://www.vimtechnologies.com/wp-content/uploads/2020/03/VIM-Technical-Support.jpg"
        alt=""
      />
    </div>
  );
}

export default Support3Section;
