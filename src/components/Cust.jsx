import React from "react";

const Cust = ({ cust, resolvedTicket }) => {
  const clickComplete = (cust) => {
    resolvedTicket(cust)
  }
  return (
    <div className="flex justify-center sm:justify-between mb-3">
      <div className="bg-white rounded-lg p-4">
        <h1 className="font-semibold text-[#001931] mb-2">{cust.title}</h1>
        <button
        onClick={() => clickComplete(cust)}
         className="bg-[#02a53b] font-bold rounded-md px-24 py-1.5 text-white cursor-pointer">
          Complete
        </button>
      </div>
    </div>
  );
};

export default Cust;
