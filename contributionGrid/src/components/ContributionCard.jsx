// import React, { useState } from "react";

// const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
// const months = [
//   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
// ];

// const getDaysInMonth = (monthIndex) => {
//   const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   return daysPerMonth[monthIndex];
// };

// const generateMonthData = (days) =>
//   Array(days)
//     .fill(0)
//     .map(() => Math.floor(Math.random() * 3));

// const getColor = (level) => {
//   switch (level) {
//     case 1:
//       return "bg-white";
//     case 2:
//       return "bg-green-200";
//     default:
//       return "bg-green-700";
//   }
// };

// const ContributionCard = () => {
//   const [currentMonth, setCurrentMonth] = useState(0);

//   const daysInMonth = getDaysInMonth(currentMonth);
//   const data = generateMonthData(daysInMonth);

//   const handlePrevMonth = () => {
//     setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
//   };

//   const handleNextMonth = () => {
//     setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
//   };

//   return (
//     <div className="rounded-2xl p-6 bg-white bg-opacity-10 backdrop-blur-md shadow-md w-full max-w-md">
//       <div className="flex items-center justify-between mb-3">
//         <button
//           onClick={handlePrevMonth}
//           className="text-white text-lg "
//         >
//           &lt;
//         </button>
//         <h2 className="text-xl font-bold">📅 {months[currentMonth]}</h2>
//         <button
//           onClick={handleNextMonth}
//           className="text-white text-lg "
//         >
//           &gt;
//         </button>
//       </div>

//       {/* Day labels */}
//       <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-400 mb-2">
//         {daysOfWeek.map((day, idx) => (
//           <div key={idx} className="w-6">{day}</div>
//         ))}
//       </div>

//       {/* Contribution grid */}
//       <div className="grid grid-cols-7 gap-1">
//         {data.map((level, idx) => (
//           <div
//             key={idx}
//             className={`w-6 h-6 rounded ${getColor(level)}`}
//           />
//         ))}
//       </div>

//       {/* Legend */}
//       <div className="mt-4 text-sm text-gray-400 flex justify-between items-center">
//         <span>⬜ Missed</span>
//         <div className="flex gap-1">
//           {[1, 2, 3].map((level) => (
//             <div key={level} className={`w-4 h-4 rounded ${getColor(level)}`} />
//           ))}
//         </div>
//         <span>🟩 More</span>
//       </div>
//     </div>
//   );
// };

// export default ContributionCard;

import {useState} from 'react'

const dayOfWeeks = ["s","m","t","w","t","f","s"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",]


const getColor = (level) => {
      switch(level){
        case 1 :
          return  "bg-white";
        case 2 : 
        return "bg-green-400";
        default:
          return "bg-green-700"
      }
};

 const ContributionCard = () => {
    const [currentMonth,setCurrentMonth] = useState("jan")

    const data = Array(31)
    .fill(0)
    .map(() => Math.floor(Math.random() * 3))

    return(
      <div >
       <div className="rounded-2xl p-6 bg-white bg-opacity-10 backdrop-blur-md shadow-md w-full max-w-md">
          <div className='bg-gray mb-4 w-7 h-4 flex justify-between'>
            {dayOfWeeks.map((day,idx) => (
              <div key={idx} className='w-6 m-2.5 mb-2'>{day}</div>
            ))}
          </div>
          <div className='grid grid-cols-7 gap-1'>
            {data.map((level,idx) => (
              <div
              key={idx}
              className={`w-6 h-6 rounded ${getColor(level)}`}
              >
              </div>
            ))}
          </div>

          <div className='flex justify-between mt-5 text-sm'>
            <span>⬜ Missed</span>
            <span>🟩 More</span>
          </div>
        </div>
      </div>
    )
 }

 export default ContributionCard