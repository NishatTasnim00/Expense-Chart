

import React, { useState, useEffect } from 'react';
import "./App.css";
import { chartData } from 'autoprefixer';

const App = () => {
  const [chartData, setChartData] = useState([]);
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
   <></>
  );
};

export default App;

