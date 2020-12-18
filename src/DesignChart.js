import React, { useState } from "react";
import Chart from "./Chart";
import CommonSecond from "./CommonSecond";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faCookieBite } from "@fortawesome/free-solid-svg-icons";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
} from "@material-ui/core";

import imgSantaLast from "./images/tenor1.gif";

export default function DesignChart() {
  const [initialData, setInitialData] = useState([]);
  const [lastData, setLastData] = useState([]);

  const addData = (initialData) => {
    setLastData((lastData) => [...lastData, initialData]);
    setInitialData("");
    document.mainForm.reset();
  };

  return (
    <React.Fragment>
      <div className="main-chart">
        <div className="jumbotron d-flex justify-content-around">
          <CommonSecond visit="/" btnName="Can't we go back" />
          <h3 style={{ fontSize: "40px", height: "100px" }} data-aos="fade-up">
            Christmas T
            <FontAwesomeIcon className="cookie-icon" icon={faCookie} />
            -D
            <FontAwesomeIcon className="cookie-icon" icon={faCookieBite} /> List
          </h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form name="mainForm">
                <TableContainer
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Table
                    style={{ width: "50%", justifyContent: "center" }}
                    size="small"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell className="tblecell-one">
                          <TextField
                            value={initialData["initialname"]}
                            onChange={(event) =>
                              setInitialData({
                                ...initialData,
                                initialname: event.target.value,
                              })
                            }
                            label="What is your plan"
                            margin="normal"
                            color="primary"
                          />
                        </TableCell>
                        <TableCell className="tblecell-two">
                          <TextField
                            value={initialData["initialperformance"]}
                            onChange={(event) =>
                              setInitialData({
                                ...initialData,
                                initialperformance: event.target.value,
                              })
                            }
                            label="How do you rate / 10"
                            margin="normal"
                            color="secondary"
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => addData(initialData)}
                            variant="contained"
                            color="primary"
                            style={{ width: "100%" }}
                          >
                            Let's Check
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {lastData.map((data) => (
                        <TableRow>
                          <TableCell>{data.initialname}</TableCell>
                          <TableCell>{data.initialperformance}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </form>

              <Chart data={lastData} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12">
          <img src={imgSantaLast} />
        </div>
      </div>
    </React.Fragment>
  );
}
