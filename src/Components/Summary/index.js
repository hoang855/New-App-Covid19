import React, { useEffect, useState } from "react";
import "./Summary.css";
import LineCharts from "../Charts/LineCharts";
import HighMaps from "../Charts/HighMaps";
import API from "../../Apis";

const Summary = ({ countryId, report, selectedCountryId }) => {
  const [mapData, setMapData] = useState({});

  console.log("hello Data", { mapData });

  useEffect(() => {
    if (countryId) {
      import(
        `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.json`
      ).then((res) => setMapData(res));
    }
  }, [countryId]);

  return (
    <div className="Summary-container">
      <div className="Summary-body-left">
        <LineCharts data={report} className="body-left-paddw100" />
      </div>
      <div className="Summary-body-right">
        <HighMaps mapData={mapData} />
      </div>
    </div>
  );
};

export default Summary;
