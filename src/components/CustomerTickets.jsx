import React, { use } from "react";
import Ticket from "./Ticket";

const CustomerTickets = ({ callPromise }) => {
  const toUse = use(callPromise);
  return (
    <div className="max-w-[1150px] mx-auto mt-9">
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-2 items-center gap-3 ">
          {toUse.map((ticket) => (
            <Ticket ticket={ticket}></Ticket>
          ))}
        </div>
        <div>dsafadf</div>
      </div>
    </div>
  );
};

export default CustomerTickets;
