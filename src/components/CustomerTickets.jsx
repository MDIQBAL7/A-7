import React, { use } from "react";
import Ticket from "./Ticket";

const CustomerTickets = ({ callPromise, clickedTicket }) => {
  const toUse = use(callPromise);
  return (
    <div className="bg-[#F5F5F5]"> 
        <div className="max-w-[1150px] mx-auto mt-9">
            <div className="flex items-center justify-between font-bold">
                <h1 className="text-xl">Customer Tickets</h1>
               <h1 className="text-xl">Task status</h1>

            </div>
      <div className="flex justify-between">
        <div className="grid grid-cols-2 items-center gap-3 ">
          {toUse.map((ticket) => (
            <Ticket 
            ticket={ticket} 
            clickedTicket = {clickedTicket}
            ></Ticket>
          ))}
        </div>
        <div>
           <small className="text-[#627382]">Select a ticket to add to Task Status</small>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerTickets;
