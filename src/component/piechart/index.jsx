import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CurrentToken = () => {
  const [chartSize, setChartSize] = useState({ height: 100, width: 100 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setChartSize({ height: 120, width: 120 }); // Smaller for small screens
      } else {
        setChartSize({ height: 130, width: 130 }); // Larger for larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    chart: {
      type: "radialBar",
      animations: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "40%", // Adjusted size for the hollow center
        },
        track: {
          background: "#e0e0e0", // Gray track background
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false, // Hide "name"
          },
          value: {
            fontSize: "20px", // Customize size of the displayed number (250)
            color: "#303030",
            offsetY: 5, // Center the value
            formatter: function () {
              return "40"; // Static value for tokens count
            },
          },
        },
      },
    },
    stroke: {
      lineCap: "round", // Rounded ends of the bar
    },
    colors: ["#14ae5c"], // Green color for the radial bar
  };

  const series = [64]; // 64% tokens used

  return (
    <div className="m-0 p-0">
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={chartSize.height}
        width={chartSize.width}
        className="m-0 p-0"
      />
      <p className="text-sm sm:text-[14px] font-semibold text-[#303030] m-0 p-0 mt-[-18px]">
        Accounts Remaining: 10
      </p>
    </div>
  );
};

export default CurrentToken;
