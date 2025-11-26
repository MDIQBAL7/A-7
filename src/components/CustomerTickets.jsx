import React, { use } from "react";
import Ticket from "./Ticket";
import Cust from "./Cust";

const CustomerTickets = ({ callPromise, clickedTicket, customerticket, resolvedTicket }) => {
  const toUse = use(callPromise);
  // console.log(customerticket)
  return (
    <div className="bg-[#F5F5F5] mx-4 sm:mx-0">
      <div className="max-w-[1150px] mx-auto mt-9">
        <div className="flex items-center justify-center sm:justify-between font-bold">
          <h1 className="text-xl">Customer Tickets</h1>
          <h1 className="text-xl hidden sm:block">Task status</h1>
        </div>
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="grid grid-cols-1 sm:grid-cols-2  items-center gap-3 ">
            {toUse.map((ticket) => (
              <Ticket ticket={ticket} clickedTicket={clickedTicket}></Ticket>
            ))}
          </div>
          <div>
            <small className={`text-[#627382] hidden sm:block`}>
              Select a ticket to add to Task Status
            </small>
             
            <div>
               <h1 className="text-xl block sm:hidden text-center font-bold mt-3.5">Task status</h1>
              {customerticket.map((cust) => (
                <Cust cust={cust} resolvedTicket = {resolvedTicket}></Cust>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
