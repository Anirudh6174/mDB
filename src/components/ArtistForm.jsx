import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function ArtistForm() {
  return (
    <>
      <Header />
      <div className="hp-artist-form">
        <div className="hp-artist-form-wrapper">
          <h1>NEW ARTIST REGISTRATION </h1>
          <br />
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSceybCoFHwcrpchgCdvPYSuZhNWWX_BI3MhtQMY4OA1aw27Nw/viewform?embedded=true"
            width="700"
            height="1220"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArtistForm;
