import React from "react";
import styles from "../../../styles/Support.module.css";

function Support4Section() {
  return (
    <div className={styles.support4Section}>
      <div className={styles.text4}>
        <h2>Kjekt å vite</h2>
        <ul>
          <li>Du vil hele tiden se hva som gjøres.</li>
          <li>Du har muligheten til å ta over kontroll ved å bruke musen.</li>
          <li>
            Du kan også avslutte når du selv ønsker det ved å avslutte
            fjernstyringsprogramvaren
          </li>
          <li>
            Når kundebehandleren er ferdig med feilrettingen, vil du få beskjed
            om at han har logget seg av maskinen.
          </li>
        </ul>
      </div>
      <div className={styles.text5}>
        <h3 className={styles.text5h3}>
          Dette er bare noe av hva vi kan tilby, ta gjerne kontakt om det du
          trenger hjelp med ikke står i listen ovenfor.
        </h3>
        <p>
          Vi gjør oppmerksom på at det ikke er alle typer feil som kan rettes og
          at maskinen MÅ være koblet opp mot internett for at vi skal kunne få
          tilgang til den
        </p>
        <img
          className={styles.teamViewer}
          src="https://www.teamviewer.com/wp-content/themes/tv-wordpress-theme/dist/media/logo-teamviewer.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Support4Section;
