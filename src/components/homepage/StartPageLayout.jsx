import React from "react";

function StartPageLayout({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-rows: auto auto 1fr auto;
          grid-template-areas:
            "header"
            "image"
            "content"
            "footer";
        }
        @media screen and (max-width: 1000px) {
          .container {
            grid-template-rows: auto 70vh 1fr auto;
          }
        }
      `}</style>
    </>
  );
}

export default StartPageLayout;
