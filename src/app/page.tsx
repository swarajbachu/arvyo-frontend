"use client";

import { Button } from "@/components/basic";
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
      } else {
        setAuthUser(undefined);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = async () => {
    try {
      toast.loading("Logging out...");
      await signOut(auth).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
      toast.success("Logged Out");
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
    toast.dismiss();
  };
  
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <h3>
        {Greetings()} {authUser?.displayName}!
      </h3>
      {authUser ? (
        <div className="flex gap-2">
          <Button onClick={userSignOut}>Logout</Button>
          <Button onClick={() => router.push("/driver-details-form")}>Fill Driver Form</Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button onClick={() => router.push("/login")}>Login</Button>
          <Button onClick={() => router.push("/signup")}>Signup</Button>
        </div>
      )}
    </div>
  );
}
