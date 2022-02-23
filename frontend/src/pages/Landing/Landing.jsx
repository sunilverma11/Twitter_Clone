import React from "react";
import "./Landing.css";

import { LeftImage } from './components/LeftImage';
import { RightPart } from './components/RightPart';
import { Fotter } from './components/Fotter';


function Landing() {
    return (
  <div className="mainLand">
    <div className="landing">
      <LeftImage />
      <RightPart/>
    </div>            
      <Fotter />
      </div>
  );
}

export default Landing;
