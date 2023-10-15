import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import { VStack } from "@chakra-ui/react";
//   import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Charts = () => {
  const options = {
    responsive: true,
    plugins: {
      customCanvasBackgroundColor: {
        color: "white",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const Bardata = {
    labels,
    datasets: [
      {
        label: "Earning",
        data: [20, 30, 40, 45, 50, 50, 60, 41, 55, 54, 56, 20],
        backgroundColor: [
          "rgb(203 213 225)",
          "rgb(203 213 225)",
          "rgb(203 213 225)",
          "rgb(203 213 225)",
          "rgb(203 213 225)",
          "rgb(203 213 225)",
          "rgb(203 213 225)",
          "rgb(203 213 225)",
          "rgb(203 213 225)",
          "#6528F7",
          "rgb(203 213 225)",
          "rgb(203 213 225)",
        ],
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10,
        },
      },
    ],
  };

  const DoughnutData = {
    labels: ["Red", "Green", "Purple"],
    datasets: [
      {
        label: "# of reviews",
        data: [12, 7, 19],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "#6b22ff",
        ],
        borderWidth: 15,
      },
    ],
  };

  return (
    <div className="flex justify-between gap-4  flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      <div className="bg-white rounded-xl p-5  w-[100%] sm:w-[100%] md:w-[100%] lg:w-[65%] xl:w-[65%]">
        <div className="">
          <h1 className="text-lg font-bold">Overview</h1>
          <p className="text-xs font-bold text-gray-500">Monthly Earning</p>
        </div>

        <div className="flex flex-col justify-center w-[100%] ">
          <Bar
            options={options}
            data={Bardata}
            style={{ backgroundColor: "white" }}
            redraw={true}
          />
        </div>
      </div>

      <div className="font-medium  p-5 bg-white rounded-xl  w-[100%] sm:w-[100%] md:w-[35%] lg:w-[30%] xl:w-[30%]">
        <div className="">
          <h1 className="text-xl font-bold">Customers</h1>
          <p className="text-xs text-gray-500 font-bold">
            Customers that buy products
          </p>
        </div>

        <div className="flex flex-col justify-center w-[100%]">
          <Doughnut data={DoughnutData} redraw={true} />
        </div>
      </div>
    </div>
  );
};

export default Charts;
