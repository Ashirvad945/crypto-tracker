// import React, { useEffect, useState } from 'react'
// import Chart from 'react-google-charts'

// const LineChart = ({historicalData}) =>{

// const [data,setData] = useState([["Date","Prices"]])

// useEffect(()=>{
//     let dataCopy = [["Data","Prices"]];
//     if(historicalData.prices){
//         historicalData.prices.map((item)=>{
//             dataCopy.push([`${new Date(item[0].toLocaleString().
//                 slice(0-5))}`])
//         })
//         setData(dataCopy);
//     }
// },[historicalData])


//   return (
//     <Chart 
//         chartType='LineChart'
//         data={data}
//         height="100%"
//         legendToggle
//     />
//   )
// }

// export default LineChart


import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData && historicalData.length > 0) {
      historicalData.forEach((item) => {
        // item[0] = timestamp, item[1] = price
        dataCopy.push([new Date(item[0]), item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart 
      chartType='LineChart'
      data={data}
      height="100%"
      options={{
        hAxis: { format: 'd MMM' }   // Only shows day and month on axis
      }}
    />
  );
};

export default LineChart;






// import React, { useEffect, useState } from 'react';
// import { Chart } from 'react-google-charts';

// const LineChart = ({ historicalData }) => {
//   const [data, setData] = useState([["Date", "Prices"]]);

//   useEffect(() => {
//     if (historicalData && historicalData.length > 0) {
// //       const formatted = historicalData.map(item => [
// //         new Date(item[0]),
// //         toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }), // "14 Jul"
// //   item[1]

// //       ]);


// const formatted = historicalData.map(item => [
//     new Date(item[0]).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }), // "14 Jul"
//     item[1]
//   ]);
//   setData([["Date", "Prices"], ...formatted]);
  
//       setData([["Date", "Prices"], ...formatted]);
//     }
//   }, [historicalData]);

//   return (
//     <Chart
//       chartType='LineChart'
//       width="100%"
//       height="400px"
//       data={data}
//       legendToggle
//       options={{
//         title: "Price History",
//         backgroundColor: "transparent",
//         curveType: "function",
//         legend: { position: "bottom" },
//       }}
//     />
//   );
// };

// export default LineChart;

