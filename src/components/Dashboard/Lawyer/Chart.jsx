/** @format */

import React, { Fragment } from "react";
import ReactApexChart from "react-apexcharts";

export const PieChart = () => {
  const state = {
    series: [86, 14],
    options: {
      chart: {
        height: 500,
        type: "pie",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
      title: {
        text: "Prodcutive v. Non-Productive Time",
        color: "#796ef0",
        fontSize: "auto",
        horizontalAlign: "center",
      },
      colors: ["#738df5", "#eaa3ff"],
      labels: ["Non Productive", "Productive"],
      legend: {
        show: true,
        dropShadow: false,
        position: "bottom",
        labels: {
          useSeriesColors: true,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        formatter: function (seriesName, opts) {
          return (
            seriesName +
            ":  <NumberFormat value={" +
            opts.w.globals.series[opts.seriesIndex] +
            "} displayType={'text'} thousandSeparator={true}/>"
          );
        },
      },
    },
  };
  return (
    <Fragment>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
      />
    </Fragment>
  );
};

export const Chart2 = () => {
  const state = {
    series: [65],

    options: {
      chart: {
        height: 250,
        type: "radialBar",
      },
      labels: ["Progress"],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#aaa",
            startAngle: -90,
            endAngle: 90,
          },
          hollow: {
            margin: 15,
            size: "70%",
          },
        },
      },
      title: {
        text: "% of Completed Task",
        color: "#796ef0",
        fontSize: "auto",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "gark",
        type: "horizontal",
        gradientToColors: ["#87D4F9", "pink"],
        stops: [0, 3],
      },
    },
  };
  return (
    <Fragment>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
      />
    </Fragment>
  );
};

export const BarChart = () => {
  const state = {
    series: [
      {
        name: "user 1",
        data: [44, 55, 41, 37, 22, 43, 21],
      },
      {
        name: "user 2",
        data: [53, 32, 33, 52, 13, 43, 32],
      },
      {
        name: "User 3",
        data: [12, 17, 11, 9, 15, 11, 20],
      },
      {
        name: "User 4",
        data: [9, 7, 5, 8, 6, 9, 4],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        borderRadius: 8,
        colors: ["#fff"],
      },

      title: {
        text: "% Indicating User Ranking",
      },
      xaxis: {
        categories: [
          "Word per Min",
          "Matter Completed",
          "Revenue Generated",
          "Articals Submitted",
          "New Client",
          "New Matter",
        ],
        labels: {
          formatter: function (val) {
            return val + "K";
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "K";
          },
        },
      },
      fill: {
        opacity: 1,
      },
      color: ["#738df5", "#eaa3ff", "#738df5", "#eaa3ff"],
      legend: {
        show: false,
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };
  return (
    <Fragment>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height="250"
      />
    </Fragment>
  );
};
