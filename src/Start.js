import React from "react";
import Common from "./Common";
import ImageSlider from "./ImageSlider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCross,
  faSnowflake,
  faVirus,
} from "@fortawesome/free-solid-svg-icons";

import imgHome1 from "./images/ch5.gif";
import imgSanta from "./images/tenor.gif";
import imgSanta1 from "./images/tenor5.gif";

const Start = () => {
  return (
    <>
      <div className="container">
        <div className="App">
          <h1
            style={{
              fontSize: "50px",
              height: "100px",
              color: "#5e0404",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Merry Chris
            <FontAwesomeIcon className="pl-2 cross-icon" icon={faCross} />
            mas 2<FontAwesomeIcon className="virus-icon" icon={faVirus} />2
            <FontAwesomeIcon className="virus-icon" icon={faVirus} />
          </h1>
          <span
            id="sub-heading"
            style={{
              textTransform: "uppercase",
              color: "black",
              fontSize: "25px",
            }}
          >
            Jesus is in our soul
          </span>
          <ImageSlider />
          <div>
            <h2
              style={{
                fontSize: "50px",
                height: "100px",
                color: "#5e0404",
                fontWeight: "bold",
              }}
              data-aos="zoom-in"
            >
              <FontAwesomeIcon className="pl-2 snow-icon" icon={faSnowflake} />
              Feliz Natal
              <FontAwesomeIcon className="pl-2 snow-icon" icon={faSnowflake} />
            </h2>
          </div>
          <Common visit="/design" btnName="Let's plan" imgSrc={imgHome1} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-4 align-self-center">
              <p>
                <img src={imgSanta1} />
              </p>
            </div>
            <div
              className="col-12 col-sm-4 align-self-center"
              data-aos="fade-up"
            ></div>
            <div className="col-12 col-sm-4 align-self-center">
              <p>
                <img src={imgSanta} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
