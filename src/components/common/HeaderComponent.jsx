import React, { useState } from "react";
import styles from "../../../styles/Header.module.css";
import { IoMenuSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

function HeaderComponent() {
  const [openAktuelt, setOpenAktuelt] = useState(false);
  const [drawbarposition, setDrawbarposition] = useState(styles.drawerin);

  const drawerHandler = () => {
    if (drawbarposition === styles.drawerin) {
      setDrawbarposition(styles.drawer);
    } else {
      setDrawbarposition(styles.drawerin);
    }
  };

  const drawer = (
    <div className={styles.drawerContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fxCtUkk70Kb2lYwzViKVSS0n5HiYMqT0Azq1Webj5DU3usBPRcF_RLeY-3udjnbB4bCo_3KNFH6_1WQdU1SdalJS1uuSUlT3CTnloQcj0-iuZpDI7qQrSr0u2LUBCHtr-FSdTEztFg5kzOAFtkFr_t=w192-h79-no?authuser=0"
          alt="Logo"
        />
      </div>
      <div className={styles.tabDrawerContainer}>
        <IoMenuSharp
          onClick={drawerHandler}
          className={styles.drawerIcon}
          style={{ fontSize: "2rem" }}
        />
      </div>
      <div className={`${drawbarposition} ${styles.draw}`}>
        <div className={styles.tabsDrawer}>
          <Link href="/">
            <p className={styles.drawerTab}>Hjem</p>
          </Link>
          <hr className={styles.hr} />
          <Link href="/bedrift">
            <p className={styles.drawerTab}>Bedrift</p>
          </Link>

          <hr className={styles.hr} />
          <Link href="/mobil">
            <p className={styles.drawerTab}>Mobil</p>
          </Link>
          <hr className={styles.hr} />
          <Link href="/support">
            <p className={styles.drawerTab}>Support</p>
          </Link>
          <hr className={styles.hr} />
          <Link href="/kontakt">
            <p className={styles.drawerTab}>Kontakt oss</p>
          </Link>

          <hr className={styles.hr} />
          <p
            onClick={() => setOpenAktuelt(!openAktuelt)}
            className={styles.drawerTab}
          >
            Aktuelt
          </p>
          {openAktuelt && (
            <>
              <Link href="/nyheter">
                <p className={styles.drawerSubTab}>Nyheter</p>
              </Link>
              <Link href="/stilling_ledig">
                <p className={styles.drawerSubTab}>Stilling ledig</p>
              </Link>
              <Link href="/salgsbetingelser">
                <p className={styles.drawerSubTab}>Salgsbetingelser</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  return (
    <>
      {isMobile ? (
        drawer
      ) : (
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src="https://lh3.googleusercontent.com/pw/ACtC-3fxCtUkk70Kb2lYwzViKVSS0n5HiYMqT0Azq1Webj5DU3usBPRcF_RLeY-3udjnbB4bCo_3KNFH6_1WQdU1SdalJS1uuSUlT3CTnloQcj0-iuZpDI7qQrSr0u2LUBCHtr-FSdTEztFg5kzOAFtkFr_t=w192-h79-no?authuser=0"
              alt=""
            />
          </div>
          <div className={styles.tabContainer}>
            <Link href="/">
              <p className={styles.tab}>Hjem</p>
            </Link>
            <Link href="/bedrift">
              <p className={styles.tab}>Bedrift</p>
            </Link>
            <Link href="/mobil">
              <p className={styles.tab}>Mobil</p>
            </Link>
            <Link href="/support">
              <p className={styles.tab}>Support</p>
            </Link>
            <Link href="/kontakt">
              <p className={styles.tab}>Kontakt oss</p>
            </Link>
            <div className={styles.dropdown}>
              <p className={styles.tab}>
                Aktuelt <RiArrowDownSLine style={{ verticalAlign: "middle" }} />
              </p>
              <div className={styles.dropdownContent}>
                <Link href="/nyheter">
                  <p className={styles.tab}>Nyheter</p>
                </Link>
                <Link href="/stilling_ledig">
                  <p className={styles.tab}>Stilling ledig</p>
                </Link>
                <Link href="/salgsbetingelser">
                  <p className={styles.tab}>Salgsbetingelser</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderComponent;
