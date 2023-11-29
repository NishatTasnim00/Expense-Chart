import React, { useState, useEffect } from "react";
import "./App.css";
import { chartData } from "autoprefixer";

const App = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(
    chartData[chartData.length - 1]
  );

  useEffect(() => {
    fetch("expense.json")
      .then((res) => res.json())
      .then((chartData) => {
        setChartData(chartData);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  console.log(chartData);

  return (
    <>
      <div className="min-h-screen bg-marionBerry">
        <div className="min-h-screen flex justify-center items-center ">
          <div>
            <h1 className="text-center font-bold text-xl lg:text-4xl text-white pb-5">
              Expense Chart
            </h1>
            <div className="bg-white rounded-3xl lg:h-[500px] lg:w-[500px] h-96 w-80">
              <h1 className="text-center font-semibold text-xl lg:text-2xl py-5">
                Expenses
              </h1>
              <div className="flex gap-3 justify-center base-text">
                <p>1M</p>
                <p>6M</p>
                <p>1Y</p>
                <p>All Time</p>
              </div>
              <div></div>
              <div className="flex gap-3 justify-center">
                <div className="flex justify-around w-full px-5 base-text">
                  <div className="flex gap-3">
                    <div className="h-2 w-5 bg-purple rounded-full mt-2"></div>
                    <div>Personal</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-5 bg-purple rounded-full mt-2"></div>
                    <div>Shopping</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-5 bg-bermuda rounded-full mt-2"></div>
                    <div>Phone</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-5 bg-midnight rounded-full mt-2"></div>
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
