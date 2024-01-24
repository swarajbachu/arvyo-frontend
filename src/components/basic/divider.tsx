import { cn } from "@/utils/tailwind";
import React from "react";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  className?: string;
}

export default function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn("h-px my-8 bg-gray-800 border-0", className)} {...props} />;
}
