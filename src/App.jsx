import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
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
  }, [num]);

  const updateDonutChart = () => {
    const personalPercentage = (personal / total) * 100;
    const shoppingPercentage = (shopping / total) * 100;
    const phonePercentage = (phone / total) * 100;
    const otherPercentage = (other / total) * 100;

    const donutChart = document.getElementById("donut-chart");
 
      donutChart.style.backgroundImage = `conic-gradient(
        #3f3cbb  0% ${personalPercentage}%,
        #75CE91  ${personalPercentage}% ${personalPercentage + phonePercentage}%,
        #121063  ${personalPercentage + phonePercentage}% ${personalPercentage + phonePercentage + otherPercentage}%,
        #9686FF    ${personalPercentage + phonePercentage + otherPercentage}% 100%
       

      
      )`;
    
  };

  return (
    <>
      <div className="min-h-screen bg-marionBerry sans-serif">
        <div className="min-h-screen flex justify-center items-center ">
          <div>
            <h1 className="text-center font-bold text-xl lg:text-4xl text-white pb-5">
              Expense Chart
            </h1>
            <div className="bg-white rounded-3xl lg:h-[500px] lg:w-[500px] h-96 w-80">
              <h1 className="text-center font-semibold text-xl lg:text-2xl py-5">
                Expenses
              </h1>
              <div className="flex gap-7 justify-center base-text">
                <button onClick={() => handleFetchData(0)}>1M</button>
                <button onClick={() => handleFetchData(1)}>6M</button>
                <button onClick={() => handleFetchData(2)}>1Y</button>
                <button onClick={() => handleFetchData(3)}>All Time</button>
              </div>
              <div>
                <div
                  id="donut-chart"
                  className="h-80 w-80 overflow-hidden  mx-auto rounded-full relative"
                >
                  <div className=" flex justify-center items-center text-4xl font-bold w-60 h-60 rounded-full bg-white overflow-hidden absolute top-10 left-10  ">
                    ${expense[0]}.
                    <span className="text-purple text-lg mt-[14px] font-normal">
                      {expense[1]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <div className="flex justify-around w-full px-5 base-text">
                  <div className="flex gap-3">
                    <div className="h-2 w-5 bg-personal rounded-full mt-2"></div>
                    <div>Personal</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-5 bg-shopping rounded-full mt-2"></div>
                    <div>Shopping</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-5 bg-phone rounded-full mt-2"></div>
                    <div>Phone</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-5 bg-other rounded-full mt-2"></div>
                    <div>Other</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
