import React from "react";
import { IoIosDocument } from "react-icons/io";

interface DocumentComponentProps {
  label: string;
  date: string;
  days: string;
}

export default function DocumentComponent({
  label,
  date,
  days,
}: DocumentComponentProps) {
  return (
    <div className="flex lg:flex-row flex-col gap-3 items-start lg:gap-5  lg:items-center">
      <div className="flex justify-between cursor-pointer items-center border shadow-sm rounded-md gap-4 w-full md:w-56 p-4">
        <span className="text-sm">{label}</span>
        <IoIosDocument />
      </div>
      <div className="flex gap-5 items-center ml-2 lg:ml-0">
        <p className="text-sm">{date}</p>
        <p className="text-sm">{days}</p>
        <p className="text-sm cursor-pointer text-blue-500">View</p>
        <p className="text-sm cursor-pointer text-red-500">Required</p>
      </div>
    </div>
  );
}
