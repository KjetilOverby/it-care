import React from "react";
import styles from "../../../styles/Home.module.css";
import ServiceCard from "./ServiceCard";
import { RiTruckLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { GiWalkieTalkie } from "react-icons/gi";
import { ImMobile } from "react-icons/im";

const HomePage = () => {
  return (
    <>
      <div className={styles.headerFill}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.subHeader}>Våre tjenester</h4>
          <p className={styles.pText}>
            På vårt verkstedet kan vi hjelpe deg med dine dataproblemer. Vi
            feilsøker, reparerer og vedlikeholder ditt utstyr. I tillegg til
            datautstyr tar vi i mot TV, parabol og mobiltelefoner til
            reparasjon. Erfarne teknikere står klare til å bistå deg på beste
            måte.
          </p>
          <p className={styles.pText}>
            Vi er stolte av å kunne kalle oss spesialister på PC som kan hjelpe
            deg hvert skritt på veien. Vi hjelper deg med å velge den
            datamaskinen som er best egnet til ditt bruk. Har du en datamaskin
            fra før hjelper vi deg med å flytte over data til ny maskin og
            installasjon av programvare. Valg av antivirusløsning og hvordan du
            best kan sikre deg på internett kan vi også hjelpe deg med. Har du
            problemer med virus eller annen uønsket programvare er vi være
            behjelpelige med en løsning.
          </p>
          <p>På Verkstedet tilbyr vi:</p>
          <ul className={styles.liList}>
            <li className={styles.liText}>Virusfjerning</li>
            <li className={styles.liText}>Feilsøking software og hardware</li>
            <li className={styles.liText}>Opprydding av PC</li>
            <li className={styles.liText}>Oppsett av rutere</li>
            <li className={styles.liText}>Testing av modem</li>
            <li className={styles.liText}>Bygging av PC</li>
            <li className={styles.liText}>Installasjon av programvare</li>
            <li className={styles.liText}>Gjenoppretting av tapt data</li>
            <li className={styles.liText}>Backup</li>
          </ul>
          <p className={styles.pText}>
            Slagordet er enkelt: Vi fikser PC’en din!
          </p>
        </div>
        <div className={styles.serviceCardContainer}>
          <ServiceCard
            icon={<RiTruckLine className={styles.icon} />}
            title="Uteservice"
            li1="Privat og bedrift"
            li2="Vi kommer ut til deg"
            li3="Raskt og effektivt"
          />
          <ServiceCard
            icon={<FaRegHandshake className={styles.icon} />}
            title="Bedriftsavtale"
            li1="Serviceavtale"
            li2="Konsulentavtaler"
            li3="Egne tilbud"
            li4="Bedrifts-antivirus"
          />
          <ServiceCard
            icon={<HiOutlineDesktopComputer className={styles.icon} />}
            title="Verksted"
            li1="Feilsøking/reparasjoner"
            li2="PC/laptop"
            li3="Mobilhjelp"
            li4="Jaktradio-programmering"
          />
          <ServiceCard
            icon={<BiStore className={styles.icon} />}
            title="Butikk"
            li1="PC/laptop"
            li2="Telefoner/nettbrett"
            li3="Radio/TV"
            li4="Jaktradio"
          />
          <ServiceCard
            icon={<GiWalkieTalkie className={styles.icon} />}
            title="Jaktradio"
            li1="Icom"
            li2="Vi programmerer"
            li3="De seneste nyhetene"
            li4="Vi hjelper deg i gang"
          />
          <ServiceCard
            icon={<ImMobile className={styles.icon} />}
            title="Mobil"
            li1="Klar til bruk"
            li2="Telering"
            li3="Oppstartshjelp"
            li4="Backup"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
