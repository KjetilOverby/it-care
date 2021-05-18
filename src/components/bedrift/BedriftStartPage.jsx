import React from "react";
import styles from "../../../styles/Bedrift.module.css";

function BedriftStartPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Bedrift</h1>
      <img
        className={styles.img}
        src="https://itcare.as/wp-content/uploads/2015/08/butikk.jpg"
        alt="Deal image"
      />
      <div className={styles.text}>
        <p className={styles.pText}>
          I samarbeid med våre partnere utfører vi et variert utvalg av
          tjenester hos bedriftskunder.
        </p>
        <p className={styles.pText}>
          IT Care AS utfører installasjon og kabling av nettverk, oppsett av
          servere, med eller uten løsninger for hjemmekontor og fjerninnlogging.
          Vi tilbyr også utvalgte back-up løsninger. Dette er
          sikkerhetsløsninger som kan spare deg for mye bryderi i fremtiden.
          Dersom det er behov for oppdatering eller installasjon av programvare
          hjelper vi med dette.
        </p>
        <p className={styles.pText}>
          Vi kan i fellesskap bli enig om en IT-løsning som er tilpasset deres
          behov. I tillegg tilbyr vi generelle konsulenttjenester og
          skreddersydde serviceavtaler.
        </p>
      </div>
    </div>
  );
}

export default BedriftStartPage;
