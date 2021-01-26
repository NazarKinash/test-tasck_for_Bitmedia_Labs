import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
const Diagram = ({ title, data: { xAxisData, yAxisData } }) => {
  const [chartData, setChartData] = useState({});
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 20,
      },
    },
    scales: {
      xAxes: [{ gridLines: { drawBorder: false, display: false } }],
      yAxes: [
        {
          gridLines: {
            color: "#F1F1F1",
            drawBorder: false,
          },
          ticks: {
            autoSkip: true,
            maxTicksLimit: 7,
          },
        },
      ],
    },
  };

  useEffect(() => {
    setChartData({
      labels: xAxisData,
      datasets: [
        {
          ladels: "Clicks",
          data: yAxisData,
          borderColor: "#3a80ba",
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderWidth: 6,
        },
      ],
    });
  }, [xAxisData, yAxisData]);

  return (
    <div>
      <h3>{title}</h3>
      <div className="chart-wrapper">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Diagram;
