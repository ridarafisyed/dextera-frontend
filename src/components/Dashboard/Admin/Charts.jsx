/** @format */

import React, { Fragment } from "react";
import ReactApexChart from "react-apexcharts";
import { Box } from "@mui/material";
// import NumberFormat from "react-number-format";

export const Appointments = () => {
  const options = {
    chart: {
      type: "bar",
      height: 500,
    },
    series: [
      {
        data: [
          {
            x: "Zoom",
            y: 150,
            fillColor: "#33b2df",
            strokeColor: "#33b2df",
          },
          {
            x: "Phone",
            y: 250,
            fillColor: "#546E7A",
            strokeColor: "#546E7A",
          },
          {
            x: "In Person",
            y: 500,
            fillColor: "#f48024",
            strokeColor: "#f48024",
          },
          {
            x: "Met",
            y: 300,
            fillColor: "#13d8aa",
            strokeColor: "#13d8aa",
          },
          {
            x: "Rescheduled",
            y: 125,
            fillColor: "#33b2df",
            strokeColor: "#33b2df",
          },
          {
            x: "Canceled",
            y: 30,
            fillColor: "#A5978B",
            strokeColor: "#A5978B",
          },
        ],
      },
    ],

    options: {
      plotOptions: {
        bar: {
          barHeight: "50%",
          borderRadius: 4,

          horizontal: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Appointments",
        style: {
          fontSize: "22px",
          fontWeight: "none",
          color: "blue",
        },
      },
    },
    xaxis: {
      style: {
        fontSize: "20px",
      },
    },
  };

  return (
    <Fragment>
      <Box>
        <ReactApexChart
          options={options.options}
          series={options.series}
          height="300"
          type="bar"
        />
      </Box>
    </Fragment>
  );
};
export const Marketing = () => {
  const config = {
    series: [
      {
        name: "Google",
        data: [10, 51, 35, 41, 29, 62, 99, 41, 18],
      },
      {
        name: "Youtube",
        data: [10, 80, 35, 41, 99, 62, 79, 21, 68],
      },
      {
        name: "Website",
        data: [60, 21, 45, 41, 89, 62, 59, 71, 98],
      },
    ],
    options: {
      chart: {
        height: 250,
        toolbar: {
          show: false,
        },
      },

      legend: {
        position: "top",
        horizontalAlign: "right",
        onItemHover: {
          highlightDataSeries: true,
        },
        labels: {
          colors: "#dddddd",
          useSeriesColors: true,
        },
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: "smooth",
        width: 2,
      },

      title: {
        text: "Marketing",
        align: "left",
        style: {
          fontSize: "22px",
          fontWeight: "none",
          color: "blue",
        },
      },
      colors: ["#0000FF", "#E91E63", "#FFAE42"],
      xaxis: {
        categories: [
          "31/01",
          "01/02",
          "02/03",
          "03/04",
          "31/05",
          "04/06",
          "06/07",
          "02/08",
          "09/09",
        ],
        style: {
          fontSize: "20px",
        },
      },

      yaxis: {},
    },
  };
  return (
    <Fragment>
      <ReactApexChart
        options={config.options}
        series={config.series}
        height="250"
        type="line"
      />
    </Fragment>
  );
};
export const Calls = () => {
  const state = {
    series: [73, 83, 93],
    options: {
      chart: {
        height: 300,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: true,
              lable: "Total",
            },
            value: {
              show: true,
            },
            total: {
              show: true,
              formatter: function(w) {
                return 249;
              },
            },
          },
        },
      },
      title: {
        text: "Calls",
        style: {
          fontSize: "22px",
          fontWeight: "none",
          color: "blue",
        },
      },
      colors: ["#0000FF", "#E91E63", "#FFAE42"],
      labels: ["Inbound", "Outbound", "Sales"],
      legend: {
        show: true,
        floating: true,
        fontSize: "auto",
        position: "left",

        labels: {
          useSeriesColors: true,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        formatter: function(seriesName, opts) {
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
      <Box>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height="200"
        />
      </Box>
    </Fragment>
  );
};

export const Email = () => {
  const state = {
    series: [73, 83, 93],
    options: {
      chart: {
        height: 250,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: true,
              lable: "Total Emails",
            },
            value: {
              show: true,
            },
            total: {
              show: true,
              formatter: function(w) {
                return 249;
              },
            },
          },
        },
      },
      title: {
        text: "Email",
        style: {
          fontSize: "22px",
          fontWeight: "none",
          color: "blue",
        },
      },
      colors: ["#0000FF", "#E91E63", "#FFAE42"],
      labels: ["Send", "Open", "Delete"],
      legend: {
        show: true,
        floating: true,
        fontSize: "auto",
        position: "left",

        labels: {
          useSeriesColors: true,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        formatter: function(seriesName, opts) {
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
      <Box>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height="200"
        />
      </Box>
    </Fragment>
  );
};
