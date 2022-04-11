import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const ApexChart = ({crypto}) => {
  const [assignTime, setAssignTime] = useState("one");
  useEffect(() => {
    // getData();
  }, []);

  console.log('cryptooo chart <<', crypto);

  const handleChange = (event, assign) => {
    setAssignTime(assign);
  };

  const getData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
    )
      .then((data) => data.json())
      .then((data) => console.log("data>>>>>>>", data));
  };

  // console.log('sparklinePrice_1', crypto["sparklinePrice_1D"]);
  // console.log('sparklinePrice_1 datess', crypto["sparklineDates_1D"]);

  var day = crypto["sparklinePrice_1D"];
  var dates = [];

  var singleDayTime = crypto["sparklineDates_1D"].map((item) => {
    let year = item.substring(0, 4);
    let month = item.substring(4, 6);
    let day = item.substring(6, 8);
    // let time = item.substring(9, 14);
    let hour = item.substring(9, 11);
    let minute = item.substring(11, 13);
    let time = `${year}-${month}-${day} ${hour}:${minute}`;
    // dates.push(moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a"))
    // return dates.push(`${year}-${month}-${day} ${hour}:${minute}`)
    return moment(time).format("ddd, h:mma");
    //return moment(time).format("M Do h:mm");
  });

  var thirtyDayTime = crypto["sparklinePrice_30D_dates"].map((item) => {
    let year = item.substring(0, 4);
    let month = item.substring(4, 6);
    let day = item.substring(6, 8);
    let time = `${year}-${month}-${day}`;

    // return moment(time).format("ddd, Do MMM");
    return moment(time).format("MM-DD");
  });

  var nintyDayTime = crypto["sparklinePrice_90D_dates"].map((item) => {
    let year = item.substring(0, 4);
    let month = item.substring(4, 6);
    let day = item.substring(6, 8);
    let time = `${year}-${month}-${day}`;

    // return moment(time).format("ddd, Do MMM");
    return moment(time).format("MM-DD-YY");
  });

  // console.log('asign time', assignTime);

  var state = {
    series: [
      {
        name: crypto["symbol"],
        data: assignTime == "one" && crypto["sparklinePrice_1D"] || assignTime == "thirty" && crypto["sparklinePrice_30D"] || assignTime == "ninety" && crypto["sparklinePrice_90D"],
        // data: [42,56,78,29,29,-20, 20, 45, 90]
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      //title: {
      //  text: "Chart",
      //  align: "left",
      //},
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        // categories: [
        //   "Jan",
        //   "Feb",
        //   "Mar",
        //   "Apr",
        //   "May",
        //   "Jun",
        //   "Jul",
        //   "Aug",
        //   "Sep",
        // ],
        categories: assignTime == "one" && singleDayTime || assignTime == "thirty" && thirtyDayTime || assignTime == "ninety" && nintyDayTime,
      },
    },
  };

  var todayDate = moment();

  var week = moment().isoWeek(10);

  //console.log("week ", week.format());

  return (
    <div id="chart">
      <ToggleButtonGroup
        color="primary"
        value={assignTime}
        exclusive
        onChange={handleChange}
        style={{marginBottom:"10px"}}
        float = 'right'  ///how do i move this over 
      >
        <ToggleButton value="one">1D</ToggleButton>
        <ToggleButton value="thirty">30D</ToggleButton>
        <ToggleButton value="ninety">3M</ToggleButton>
        <ToggleButton value="twelve">12M</ToggleButton>
      </ToggleButtonGroup>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
