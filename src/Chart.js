import React from "react";
import { Bar } from "react-chartjs-2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

export default function Chart(props) {
  const Labels = props.data.map((name) => name.initialname);
  const Mark = props.data.map((point) => point.initialperformance);
  const projectedData = {
    labels: Labels,
    datasets: [
      {
        label: "Plan",
        data: Mark,
        barPercentage: 1.2,
        barThickness: 200,
        maxBarThickness: 40,
        minBarLength: 6,
        backgroundColor: ["#820000", "blue", "orange", "teal", "green"],
        borderColor: ["olive"],
        borderWidth: 1,
        fontColor: "#blue",
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-3">
          <FontAwesomeIcon
            className="pl-2 my-2 snow-icon1"
            icon={faSnowflake}
          />
          <div>
            <FontAwesomeIcon
              className="pl-2 my-2 snow-icon2"
              icon={faSnowflake}
            />
            <FontAwesomeIcon
              className="pl-2 my-2 snow-icon3"
              icon={faSnowflake}
            />
            <div>
              <FontAwesomeIcon
                className="pl-2 my-2 snow-icon4"
                icon={faSnowflake}
              />
              <div>
                <FontAwesomeIcon
                  className="pl-2 snow-icon5"
                  icon={faSnowflake}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-sm-10"
          style={{
            width: "60%",
            height: "400px",
            display: "inline-flex",
            backgroundColor: "#fff",
          }}
        >
          <Bar
            data={projectedData}
            options={{
              maintainAspectRatio: false,
              title: {
                display: true,
                text: "Christmas task projection",
                fontSize: 15,
                fontColor: "#000000",
                fontWeight: "bold",
                backgroundColor: ["red", "green", "blue"],
                borderWidth: 20,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      fontSize: 15,
                      fontColor: "#00301e",
                      fontWeight: "bold",
                    },
                  },
                ],

                xAxes: [
                  {
                    ticks: {
                      fontColor: "#00301e",
                      fontSize: 15,
                      borderWidth: 5,
                      fontWeight: "bold",
                    },
                  },
                ],
              },
            }}
          ></Bar>

          <div className="col-12 col-sm-6">
            <FontAwesomeIcon
              className="pl-2 my-2 snow-icon1"
              icon={faSnowflake}
            />
            <div>
              <FontAwesomeIcon
                className="pl-2 my-2 snow-icon2"
                icon={faSnowflake}
              />
              <FontAwesomeIcon
                className="pl-2 my-2 snow-icon3"
                icon={faSnowflake}
              />
              <div>
                <FontAwesomeIcon
                  className="pl-2 my-2 snow-icon4"
                  icon={faSnowflake}
                />
                <div>
                  <FontAwesomeIcon
                    className="pl-2 snow-icon5"
                    icon={faSnowflake}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
