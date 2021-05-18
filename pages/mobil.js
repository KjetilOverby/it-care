import React from "react";
import BasicLayout from "../src/components/common/BasicLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import MobilStartPage from "../src/components/mobil/MobilStartPage";

function mobil() {
  return (
    <BasicLayout>
      <HeaderComponent />
      <MobilStartPage />
      <FooterComponent />
    </BasicLayout>
  );
}

export default mobil;
