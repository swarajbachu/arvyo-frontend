"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useAuth } from "./provider/auth";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [time, setTime] = useState(new Date().toString().split(" GMT")[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toString().split(" GMT")[0]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { userSignOut } = useAuth();

  return (
    <nav className="px-5 py-3 mb-5 bg-gray-300 flex justify-between items-center">
      <Image
        src="/arvyo.png"
        width={50}
        height={50}
        alt="aryvo logo"
        className="mx-6 md:hidden block"
      />
      <RxHamburgerMenu
        className="md:hidden cursor-pointer"
        onClick={toggleSidebar}
      />

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed bg-white h-full w-64 p-4">
            <NavLinks isMobile />
          </div>
          <MdClose
            className="absolute top-4 right-6 cursor-pointer text-2xl"
            onClick={toggleSidebar}
          />
        </div>
      )}

      <NavLinks isMobile={false} />

      <div className="xl:flex lg:gap-2 xl:gap-4 items-center hidden">
        <p className="text-sm text-gray-900 max-w-fit">{time}</p>
        <button className="bg-transparent border-blue-500 border px-3 rounded-full text-blue-500 text-sm py-1">
          create
          <MdKeyboardArrowDown className="inline-block text-lg" />
        </button>
        <p className="text-sm">Operator Name</p>
        <IoMdMailOpen className="text-xl cursor-pointer" />
        <FaGear className="text-xl cursor-pointer" />
        <button
          className="bg-red-400 border px-3 rounded-md text-white text-sm py-1"
          onClick={userSignOut}
        >
          <IoLogOut className="text-xl cursor-pointer" />
        </button>
      </div>
    </nav>
  );
}

const NavLinks = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <div
      className={`${
        isMobile ? "flex flex-col md:hidden" : "md:flex-row hidden md:flex"
      }  gap-5 items-start md:items-center text-sm`}
    >
      <Image
        src="/arvyo.png"
        width={50}
        height={50}
        alt="aryvo logo"
        className="mx-6 md:block hidden"
      />
      <Link href="/">Home</Link>
      <Link href="#">Trips</Link>
      <Link href="#">Drivers</Link>
      <Link href="#">Customers</Link>
      <Link href="#">Finance</Link>
      <Link href="#">Reports</Link>
      <input
        type="search"
        id="default-search"
        className="block w-40 xl:w-56 rounded-full p-4 h-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="search"
        required
      />
    </div>
  );
};
