import React from "react";
import BasicLayout from "../src/components/common/BasicLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import SupportStartPage from "../src/components/support/SupportStartPage";
function support() {
  return (
    <BasicLayout>
      <HeaderComponent />
      <SupportStartPage />
      <FooterComponent />
    </BasicLayout>
  );
}

export default support;
