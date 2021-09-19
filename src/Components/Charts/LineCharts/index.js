import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import React, { useEffect, useState } from "react";
import moment from "moment";
const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));
  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng Ca nhiễm",
        data: data.map((item) => item.Confirmed),
      },
    ],
  };

  // return (
  //   "container",
  //   {
  //     title: {
  //       text: "Biển Đồ Covid-19",
  //     },

  //     subtitle: {
  //       text: "Source: thesolarfoundation.com",
  //     },

  //     yAxis: {
  //       title: {
  //         text: "Tổng Ca Nhiểm",
  //       },
  //     },

  //     xAxis: {
  //       categories: categories,
  //       accessibility: {
  //         rangeDescription: "Range: 2020 to 2021",
  //       },
  //     },

  //     legend: {
  //       layout: "vertical",
  //       align: "right",
  //       verticalAlign: "middle",
  //     },

  //     plotOptions: {
  //       series: {
  //         label: {
  //           connectorAllowed: false,
  //         },
  //         pointStart: 2021,
  //       },
  //     },

  //     series: [
  //       {
  //         name: "Installation",
  //         data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
  //       },
  //       {
  //         name: "Manufacturing",
  //         data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
  //       },
  //       {
  //         name: "Sales & Distribution",
  //         data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
  //       },
  //       {
  //         name: "Project Development",
  //         data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
  //       },
  //       {
  //         name: "Other",
  //         data: data.map((item) => item.Confirmed),
  //       },
  //       {
  //         name: "Tổng Ca nhiễm",
  //         data: data.map((item) => item.Confirmed),
  //       },
  //     ],

  //     responsive: {
  //       rules: [
  //         {
  //           condition: {
  //             maxWidth: 500,
  //           },
  //           chartOptions: {
  //             legend: {
  //               layout: "horizontal",
  //               align: "center",
  //               verticalAlign: "bottom",
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   }
  // );
};

const LineCharts = ({ data }) => {
  const [options, setoptions] = useState({});

  useEffect(() => {
    setoptions(generateOptions(data));
  }, [data]);
  return <HighchartsReact highcharts={Highchart} options={options} />;
};

export default LineCharts;
