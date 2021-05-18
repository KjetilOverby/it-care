import React from "react";
import styles from "../../../styles/Support.module.css";

function Support2Section() {
  return (
    <div className={styles.support2Section}>
      <h1 className={styles.headerS}>Hvordan virker dette?</h1>
      <img
        className={styles.img2}
        src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80"
        alt=""
      />
      <div className={styles.text2}>
        <p className={styles.pText}>
          For å bruke fjernstyring er vi avhengig av at du har en maskin med
          nyere versjon av Windows (XP eller nyere). Vi er også avhengig av at
          du har en tilkobling til Internett, og vi anbefaler et
          bredbåndsabonnement.
        </p>
        <ol>
          <li>Ring oss på telefonnummer 62 95 77 22.</li>
          <li>Spør om fjernhjelp/fjernstyring av din PC.</li>
        </ol>
        <h1 className={styles.header2}>Hva koster dette?</h1>
        <p className={styles.pText}>
          For privatkunder 750,- pr. time (187,50,- pr. påbegynte 15 minutt).
          <br />
          For bedriftskunder 875,- pr. time (218,75,- pr. påbegynte 15 minutt).
        </p>
      </div>
    </div>
  );
}

export default Support2Section;
