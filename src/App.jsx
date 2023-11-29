

import React, { useState, useEffect } from 'react';
import "./App.css";
import { data } from 'autoprefixer';

const App = ({ chartData }) => {
  const [data, setData] = useState([])
  const [selectedPeriod, setSelectedPeriod] = useState('ALL TIME');
  console.log(data)

  useEffect(()=>{
    fetch('data/expense.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  }, [])




  useEffect(() => {
    // Function to draw the pie chart using Canvas API
    const drawPieChart = () => {
      const canvas = document.getElementById('pieChart');
      const ctx = canvas.getContext('2d');
      const data = chartData.find((entry) => entry.period === selectedPeriod);

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY);

      let startAngle = 0;

      // Draw each segment of the pie chart
      Object.keys(data).forEach((category, index, array) => {
        if (category !== 'period') {
          const value = data[category];
          const endAngle = startAngle + (Math.PI * 2 * value) / getTotalValue(data);

          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, radius, startAngle, endAngle);
          ctx.fillStyle = getRandomColor();
          ctx.fill();
          ctx.closePath();

          // Draw legend
          drawLegend(ctx, category, startAngle, endAngle);

          startAngle = endAngle;
        }
      });
    };

    // Helper function to get the total value of all categories
    const getTotalValue = (data) => {
      return Object.values(data).reduce((acc, value) => (typeof value === 'number' ? acc + value : acc), 0);
    };

    // Helper function to draw legend
    const drawLegend = (ctx, category, startAngle, endAngle) => {
      const legendX = 10;
      const legendY = 20 * (Object.keys(data).indexOf(category) + 1);

      ctx.fillStyle = getRandomColor();
      ctx.fillRect(legendX, legendY - 10, 15, 15);
      ctx.fillStyle = 'black';
      ctx.fillText(category, legendX + 20, legendY);
    };

    // Helper function to generate random color
    const getRandomColor = () => {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    drawPieChart();
  }, [chartData, selectedPeriod]);

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div>
      <div className="period-buttons">
        <button onClick={() => handlePeriodChange('1M')}>1 Month</button>
        <button onClick={() => handlePeriodChange('6M')}>6 Months</button>
        <button onClick={() => handlePeriodChange('1Y')}>1 Year</button>
        <button onClick={() => handlePeriodChange('ALL TIME')}>All Time</button>
      </div>
      <canvas id="pieChart" width="400" height="400"></canvas>
    </div>
  );
};

export default App;

