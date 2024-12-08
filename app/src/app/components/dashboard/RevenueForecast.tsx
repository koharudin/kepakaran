"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Select } from "flowbite-react";


const RevenueForecast = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("This Week");

  const getChartData = (period: string) => {
    switch (period) {
      case "April 2024":
        return {
          series: [
            {
              name: "2024",
              data: [2.5, 3.0, 2.8, 3.2, 2.9, 3.1, 2.7, 2.8, 3.0],
            },
            {
              name: "2023",
              data: [-1.5, -1.2, -1.8, -2.0, -1.7, -1.9, -2.1, -1.6, -1.8],
            },
          ],
        };
      case "May 2024":
        return {
          series: [
            {
              name: "2024",
              data: [2.7, 2.9, 2.6, 3.1, 3.0, 2.8, 2.9, 3.2, 3.1],
            },
            {
              name: "2023",
              data: [-1.4, -1.3, -1.9, -1.7, -1.8, -2.0, -1.9, -1.8, -2.1],
            },
          ],
        };
      case "June 2024":
        return {
          series: [
            {
              name: "2024",
              data: [3.0, 3.2, 3.1, 3.5, 3.4, 3.3, 3.2, 3.4, 3.6],
            },
            {
              name: "2023",
              data: [-1.6, -1.7, -1.8, -2.0, -1.9, -1.8, -1.7, -1.9, -2.0],
            },
          ],
        };
      case "This Week":
      default:
        return {
          series: [
            {
              name: "2024",
              data: [1.2, 2.7, 1.0, 3.6, 2.1, 2.7, 2.2, 1.3, 2.5],
            },
            {
              name: "2023",
              data: [-2.8, -1.1, -2.5, -1.5, -2.3, -1.9, -1.0, -2.1, -1.3],
            },
          ],
        };
    }
  };


  const barChartData = getChartData(selectedPeriod);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div className="rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
      <div className="flex justify-between items-center">
        <h5 className="card-title">Revenue Forecast</h5>
        <Select
          id="periods"
          className="select-md"
          value={selectedPeriod}
          onChange={handleSelectChange}
          required
        >
          <option value="This Week">This Week</option>
          <option value="April 2024">April 2024</option>
          <option value="May 2024">May 2024</option>
          <option value="June 2024">June 2024</option>
        </Select>
      </div>

      <div className="-ms-4 -me-3 mt-2">
        
      </div>
    </div>
  );
};

export default RevenueForecast;
