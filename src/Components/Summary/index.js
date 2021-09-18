import React, { Component } from "react";
import "./Summary.css"

import LineCharts from "../Charts/LineCharts"


const Summary = () => {
  return <div className="Summary-container">
      <div className="Summary-body-left">
          <LineCharts data={[]} />
      </div>
      <div className="Summary-body-right"></div>
  </div>;
};

export default Summary;
