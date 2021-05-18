import React from "react";

function ImageLayout({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-rows: auto 20rem 1fr auto;
          grid-template-areas:
            "header"
            "image"
            "content"
            "footer";
        }
        @media screen and (max-width: 1000px) {
          .container {
            grid-template-rows: auto 10rem 1fr auto;
          }
        }
      `}</style>
    </>
  );
}

export default ImageLayout;
