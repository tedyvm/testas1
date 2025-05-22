import React from "react";
import "./Dekojame.css";

const Dekojame = () => {
  return (
    <div className="thankyou">
      <lottie-player
        src="https://lottie.host/6ea2c4e3-153f-4b73-bc6e-3d1099c5dd2b/z2Qlhg4dsv.json"
        background="transparent"
        speed="1"
        direction="1"
        mode="normal"
        autoplay
      ></lottie-player>
      <h3>Dėkojame!</h3>
      <p>Artimiausiu metu su jumis susisieks mūsų vadybininkas.</p>
    </div>
  );
};

export default Dekojame;
