import React, { useEffect } from "react";
import "./App.css";
import Start from "./Start";
import DesignChart from "./DesignChart";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Router>
        <div className="mainApp">
          <Switch>
            <Route path="/" exact component={Start} />
            <Route path="/design" exact component={DesignChart} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
