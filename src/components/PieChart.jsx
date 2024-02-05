// CircleGraph.js
import React from 'react';
import {CircularProgressbar,} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PieChart = ({ percentage }) => {
    return (
        <div className='pie_chart' >
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={5}
    />
        </div>
    );
};

export default PieChart;
