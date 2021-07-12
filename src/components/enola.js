import React from "react";
import EnolaIntro from "./enolaIntro.js";
import EnolaInfo from "./enolaInfo.js";
import EnolaWhy from "./enolaWhy.js";
import EnolaWhat from "./enolaWhat.js";

function enola(props) {
  return (
    <div className="enola" ref={props.refProp}>
      <EnolaIntro />
      <EnolaInfo />
      <EnolaWhy />
      <EnolaWhat />
    </div>
  );
}

export default enola;