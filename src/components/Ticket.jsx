import React from "react";

const Ticket = ({ ticket }) => {
  console.log(ticket);
  const { id, title, description, customer, priority, createdAt, status } =
    ticket;
  return (
    <div className="bg-white border-2 border-red-400 rounded-md p-3 w-[400px]">
      <div className="flex items-center justify-between mb-1">
        <h1 className="font-bold">{title}</h1>
        <p className="bg-[#B9F8CF] px-4 py-1 rounded-3xl flex items-center gap-x-1">
          <p className="h-[15px] w-[15px] rounded-full bg-[#02A53B]"></p>
          {status}
        </p>
      </div>
      <p className="text-[#627382]">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <div>
          <span className="text-[#627382] mr-3">#{id}</span>
          <span className="text-red-500">{priority}</span>
        </div>
        <div className="text-[#627382]">
          <span className="mr-3">{customer}</span>
          <span><i class="fa-solid fa-calendar mr-1"></i>{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
