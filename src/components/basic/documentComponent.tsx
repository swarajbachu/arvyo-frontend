import React from "react";
import { IoIosDocument } from "react-icons/io";

interface DocumentComponentProps {
  label: string;
  date: string;
  days: string;
  ref: React.MutableRefObject<HTMLInputElement | null>;
  onChange: () => void;
}

export default function DocumentComponent({
  label,
  date,
  days,
  ref,
  onChange,
}: DocumentComponentProps) {
  return (
    <div className="flex lg:flex-row flex-col gap-3 items-start lg:gap-5  lg:items-center">
      <label
        className="flex justify-between cursor-pointer items-center border shadow-sm rounded-md gap-4 w-full md:w-56 p-4"
        onChange={onChange}
        htmlFor="file"
      >
        <input
          type="file"
          className="hidden"
          ref={ref}
          id="file"
          accept=".jpg, .png, .jpeg, .pdf, .docx"
        />
        <span className="text-sm">{label}</span>
        <IoIosDocument />
      </label>
      <div className="flex gap-5 items-center ml-2 lg:ml-0">
        <p className="text-sm">{date}</p>
        <p className="text-sm">{days}</p>
        <p className="text-sm cursor-pointer text-blue-500">View</p>
        <p className="text-sm cursor-pointer text-red-500">Required</p>
      </div>
    </div>
  );
}
