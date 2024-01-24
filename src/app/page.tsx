'use client';

import { auth } from "@/utils/firebase";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Greetings = () => {
  if (new Date().getHours() < 12) {
    return "Good Morning";
  }
  if (new Date().getHours() < 18) {
    return "Good Afternoon";
  }
  return "Good Evening";
};

export default function Home() {
  const [authUser, setAuthUser] = useState<User>();

  const router = useRouter();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      }else{setAuthUser(undefined)}
    });

    return () => {
      listen();
    }
  }, []);

  const  userSignOut = async () => {
    try {
      toast.loading("Logging out...");
      await signOut(auth).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      }
      );
      toast.success("Logged Out");
    }
    catch (err) {
      console.log(err);
    }
    toast.dismiss();
  }
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <h3>
        {Greetings()} {authUser?.email}!
      </h3>
      {authUser ? (
        <button
        onClick={userSignOut}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Logout
        </button>
      ) : (
        <button
        onClick={() => router.push("/login")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Login
        </button>
      )}
    </div>
  );
}
