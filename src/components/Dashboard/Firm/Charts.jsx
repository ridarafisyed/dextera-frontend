/** @format */

import React, { Fragment } from "react";
import ReactApexChart from "react-apexcharts";

export const Chart = () => {
  const state = {
    series: [110, 110, 19, 80],
    options: {
      chart: {
        height: 500,
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "55%",
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val;
            },
          },
        },
      },
      title: {
        text: "Matter by Type",
        color: "#796ef0",
        fontSize: "auto",
      },
      colors: ["#03a5fc", "#fcd200", "#fca400", "#003f5c"],
      labels: [
        "Business Contacts",
        "Criminal Defence",
        "Personal Injury",
        "Family Law",
      ],
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
        type="donut"
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
            // background: "#333",
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
      type: "solid",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
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
        name: "Profit",
        data: [640, 505, 210, 108, 760, 410, 440, 140, 660, 320],
      },
      {
        name: "Loss",
        data: [530, 302, 420, 220, 290, 800, 160, 490, 708, 110],
      },
    ],

    options: {
      colors: ["#e85355", "#28c570"],
      chart: {
        height: 100,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return "$" + val;
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + "";
          },
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
        ],
      },

      legend: {
        show: true,
        dropShadow: false,
        position: "right",
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
        type="bar"
        height="250"
      />
    </Fragment>
  );
};

export const BarChart2 = () => {
  const state = {
    series: [
      {
        data: [19, 57, 78, 40, 95, 25],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      colors: ["#e85355", "#fd9905", "#28c570"],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
      },
      legend: {
        show: false,
      },
      title: {
        text: "% of Task Completed by User",
        color: "#796ef0",
        fontSize: "auto",
      },
      xaxis: {
        categories: [
          "M. Jones",
          "R. Smith",
          "T.Sweeney",
          "S. Booker",
          "A. Knighter",
          "J. King",
        ],
        labels: {
          style: {
            // colors: ["#e85355", "#fd9905", "#28c570"],
            fontSize: "12px",
          },
        },

        legend: {
          show: false,
          dropShadow: false,
          position: "right",
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

export const BarChart3 = () => {
  const state = {
    // colors: ["#e85355", "#fd9905", "#28c570"],
    options: {
      series: [
        {
          data: [750, 280, 500, 720],
        },
      ],
      chart: {
        type: "bar",
        height: 380,
      },
      plotOptions: {
        bar: {
          barHeight: "100%",
          borderRadius: 8,
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      //       light blue,  yellow, orange, dark blue,
      colors: ["#fcd200", "#fca400", "#003f5c", "#03a5fc"],
      dataLabels: {
        enabled: false,
        textAnchor: "start",
        style: {
          colors: ["#fff"],
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true,
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      xaxis: {
        categories: [
          "Criminal Defense",
          "Personal Injury",
          "Family Law",
          "Business Contract",
        ],
      },
      yaxis: {
        labels: {
          show: true,
        },
      },
      title: {
        text: "Revenue By Mater Type",
        align: "center",
        floating: true,
      },

      tooltip: {
        theme: "light",
        x: {
          show: false,
        },
        y: {
          formatter: function (val, opt) {
            return (
              opt.w.globals.labels[opt.dataPointIndex] + ": $ " + val + " k"
            );
          },
        },
      },
    },
  };
  return (
    <Fragment>
      <ReactApexChart
        options={state.options}
        series={state.options.series}
        type="bar"
        height="250"
      />
    </Fragment>
  );
};
