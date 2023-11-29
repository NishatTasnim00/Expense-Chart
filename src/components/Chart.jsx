import React, { useState, useEffect } from "react";

const Chart = () => {
  const [num, setNum] = useState(3);
  const [chartData, setChartData] = useState([]);
  // console.log(num)/
  useEffect(() => {
    fetch("expense.json")
      .then((res) => res.json())
      .then((data) => {
        setChartData(data[num]);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [num]);
  console.log(chartData);
  const handleFetchData = (n) => {
    setNum(n);
  };

  const { personal, shopping, phone, other } = chartData;
  const price = personal + shopping + phone + other;

  let total = personal + shopping + phone + other;
  total = total.toFixed(2);

  let totalExpense = total.toString();
  let expense = totalExpense.split(".");

  useEffect(() => {
    updateDonutChart();
  }, [num, chartData]);

  const updateDonutChart = () => {
    const personalPercentage = (personal / total) * 100;
    const shoppingPercentage = (shopping / total) * 100;
    const phonePercentage = (phone / total) * 100;
    const otherPercentage = (other / total) * 100;

    const donutChart = document.getElementById("donut-chart");

    donutChart.style.backgroundImage = `conic-gradient(
          #3f3cbb  0% ${personalPercentage}%,
          #75CE91  ${personalPercentage}% ${
      personalPercentage + phonePercentage
    }%,
          #121063  ${personalPercentage + phonePercentage}% ${
      personalPercentage + phonePercentage + otherPercentage
    }%,
          #9686FF   ${
            personalPercentage + phonePercentage + otherPercentage
          }% 100%
         
        )`;
  };
  return (
    <>
   
      <div className="flex gap-7 justify-center base-text">
        <button onClick={() => handleFetchData(0)} className={`${num==0 ? "active": ""}`}>1M</button>
        <button onClick={() => handleFetchData(1)} className={`${num==1 ? "active": ""}`}>6M</button>
        <button onClick={() => handleFetchData(2)} className={`${num==2 ? "active": ""}`}>1Y</button>
        <button onClick={() => handleFetchData(3)} className={`${num==3 ? "active": ""}`}>All Time</button>
      </div>
      <div>
        <div
          id="donut-chart"
          className="lg:h-80 lg:w-80 h-60 w-60 overflow-hidden my-5  mx-auto rounded-full relative"
        >
          <div className="lg:w-60 lg:h-60 h-40 w-40 flex justify-center items-center text-4xl font-bold  rounded-full bg-white overflow-hidden absolute top-10 left-10  ">
            ${expense[0]}.
            <span className="text-shopping text-lg mt-[14px] font-normal">
              {expense[1]}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
