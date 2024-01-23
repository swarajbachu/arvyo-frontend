import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { FaGear } from "react-icons/fa6";

export default function NavBar() {
  return (
    <nav className="px-5 py-3 bg-gray-300 flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <Image
          src="/arvyo.png"
          width={50}
          height={50}
          alt="aryvo logo"
          className="mx-6"
        />
        <Link href="#">Home</Link>
        <Link href="#">Trips</Link>
        <Link href="#">Drivers</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Finance</Link>
        <Link href="#">Reports</Link>
        <input
          type="search"
          id="default-search"
          className="block w-56 rounded-full p-4 h-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="search"
          required
        />
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-sm text-gray-900">
          {new Date().toString().split(" GMT")[0]}
        </p>
        <button className="bg-transparent border-blue-500 border px-3 rounded-full text-blue-500 text-sm py-1">
          create
          <MdKeyboardArrowDown className="inline-block text-lg" />
        </button>
        <p className="text-sm ">Operator Name</p>
        <IoMdMailOpen />
        <FaGear />
      </div>
    </nav>
  );
}
