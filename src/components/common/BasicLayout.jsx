import React from "react";

function BasicLayout({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-rows: 5rem auto 1fr auto;
          grid-template-areas:
            "headerfill"
            "header"
            "content"
            "footer";
        }
      `}</style>
    </>
  );
}

export default BasicLayout;
