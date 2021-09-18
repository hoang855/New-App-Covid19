import HighchartsReact from "highcharts-react-official";
import Highchart from 'highcharts';
import React, { useEffect, useState } from "react";

const generateOptions = (data) => {
  const categories = [];

  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng Ca Nhiểm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    color: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        test: null,
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      poinFormat:
        '<tr><td style="color:{series.color};padding:0">{seris.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      colunm: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng Ca Nhiểm",
        data: data.map((item) => item.confirmed),
      },
    ],
  };
};

const LineCharts = ({ data }) => {
  const [options, setoptions] = useState({});

  useEffect(()=>{
    setoptions(generateOptions(data))
    
  }, [data])
  return <HighchartsReact highcharts={Highchart} options={options} />;
};

export default LineCharts;
