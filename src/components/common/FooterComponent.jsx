import React from "react";
import styles from "../../../styles/Footer.module.css";

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <h3 className={styles.header}>IT Care AS</h3>
        <p className={styles.subText}>Kaffegata 53, 2270 Flisa</p>
        <p className={styles.subText}>Tlf: 629 57722</p>
        <p className={styles.subText}>Email: post@itcare.as</p>
      </div>
      <div className={styles.openContainer}>
        <h3 className={styles.header}>Åpningstider</h3>
        <p className={styles.subText}>mandag - fredag: 11:00 - 16:00</p>
        <p className={styles.subText}>lørdag: 11:00 - 14:00</p>
        <p className={styles.subText}>søndag: stengt</p>
      </div>
      <img
        className={styles.img}
        src="https://lh3.googleusercontent.com/CWQamdeCZWRKHp8Eqk4CPfjuqQpWGa5xfFpvGwF2nyLLDUx1PM1-kFBBupmeVi8VniygBLJPkkOxuIo0zM5iQ0vGjddxnNzsq2lti2HmZvdcuqJdhQcEposmu3nm2Gx3FmnQ6TJmRgSmW_ZIk5q2MJj7oqE6MigZkwCRvaeQezrey6_jyNnWdaRYX9WNqatqG7yA7Sd55kenjsePka2T22cjnRycBecZ-IDAfV3hOJvUib50l0AwW0imE0j-jKncWAcs5xPHKKmfnWZMcR91AgyiT4YDdeozecLEaYrZJc2RmYQ_TKxFH4PLO8kGzXHqvQzZa2e0V88cYyQGxITxgfQGyruGph2qFA9K2co-PW2TJGwsi8hH5fkPwUIWTKw37erREx3pYPuMwqOkNPUC0o2KRaDFh-2kIooSOZ45bP2IiPKKBUPc1pkAswR9UtLVTclZ3xTvDO7rbN63MMk6HnMEMUTdg_wGu1bsl6NrPwXLbnr0Ij5xShXI2BSHq1fZMI642T43udOnp9WJPksOhzdcRkD7x-GugVrq6JKLZBtNVwlEH3-0tY3YRLB1MiHsvbLRWrfyVQuQnJmaslsxfAH-u2Bj70AMOIO3MSCkFndNs17X8RM_UEIy8FKCcrP5b0iDYlaAa9YqvB1Di8HeFPE3EcwGg5dmTBm8JWbvFD5mzC5TtOb1O8ps93VyAKeNbXRAODWmSuEEWc2eCKtEj3sR=w266-h190-no?authuser=0"
        alt="logo"
      />
    </div>
  );
};

export default FooterComponent;
