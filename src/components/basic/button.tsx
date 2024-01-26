import { cn } from "@/utils/tailwind";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`,
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
