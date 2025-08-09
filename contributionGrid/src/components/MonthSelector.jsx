// import React from "react";

// const months = [
//   "Jan", "Feb", "Mar", "Apr",
//   "May", "Jun", "Jul", "Aug",
//   "Sep", "Oct", "Nov", "Dec",
// ];

// const MonthSelector = ({ selected, onChange }) => {
//   return (
//     <select
//       className="mb-6 px-4 py-2 rounded bg-white bg-opacity-30 text-black backdrop-blur-md border border-gray-600"
//       value={selected}
//       onChange={(e) => onChange(e.target.value)}
//     >
//       {months.map((month) => (
//         <option key={month} value={month}>
//           {month}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default MonthSelector;

import React from "react";

const months = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec",
]

const MonthSelector = () => {
  return(
    <div className="bg-grey opacity-25 text-black">
      <select>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  )
}

export default MonthSelector;