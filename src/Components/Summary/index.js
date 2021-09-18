import React, { useEffect, useState } from "react";
import "./Summary.css";
import LineCharts from "../Charts/LineCharts";
import HighMaps from "../Charts/HighMaps";
const Summary = ({ report, selectedCountryId }) => {
  const [mapsData, setmapsData] = useState({});
  useEffect(() => {
    if (selectedCountryId) {
      import(
        `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
      ).then((res) => setmapsData(res));
    }
  }, [selectedCountryId]);
  return (
    <div className="Summary-container">
      <div className="Summary-body-left">
        <LineCharts data={report} className="body-left-paddw100" />
      </div>
      <div className="Summary-body-right">
        <HighMaps mapsData={mapsData} />
      </div>
    </div>
  );
};

export default Summary;
