import React, { useEffect, useState } from "react";
import "./Summary.css";
import LineCharts from "../Charts/LineCharts";
import HighMaps from "../Charts/HighMaps";
// import LineTransfers from "../Charts/LineTransfers";
import LineTransfers from "../Charts/LineTransfers";

const Summary = ({ countryId, report, getsummary }) => {
  const [mapData, setMapData] = useState({});
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

      <div className="let-felex">
        <div className="Summary-body-right">
          <HighMaps mapData={mapData} />
        </div>

        <div className="Summary-body-right-right">
          <LineTransfers getsummary={getsummary}/>
        </div>
      </div>
    </div>
  );
};

export default Summary;
