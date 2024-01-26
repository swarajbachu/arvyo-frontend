"use client";

import { Button } from "@/components/basic";
import { useAuth } from "@/components/provider/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Image from "next/image";

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
  const { currentUser, userSignOut } = useAuth();
  const router = useRouter();
  const [formFilled, setFormFilled] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem("formFilled");
    if (item === "true") {
      setFormFilled(true);
    }
  }, []);
  
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-md rounded-lg p-8 max-w-fit max-h-fit">
        <div className="w-full flex flex-col gap-3 justify-center items-center">
          <Image
            src="/logo.png"
            alt="Success"
            width={70}
            height={70}
            className="mx-auto my-5"
          />
          <h3 className="text-xl">
            {Greetings()} {currentUser?.displayName}!
          </h3>
          <h4 className="text-sm mb-3 font-semibold text-gray-600">
            Welcome to the Driver&apos;s Portal
          </h4>

          {currentUser ? (
            <div className="flex gap-2">
              <Button onClick={userSignOut} className="bg-red-600">
                Logout
              </Button>
              <Button onClick={() => router.push("/driver-details-form")}>
                {formFilled ? "Refill the form" : "Fill Driver Form"}
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button onClick={() => router.push("/login")}>Login</Button>
              <Button onClick={() => router.push("/signup")}>Signup</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
