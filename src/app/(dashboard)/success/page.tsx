"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/basic";
import { useRouter } from "next/navigation";

export default function SubmissionSuccess() {
  const router = useRouter();
  return (
    <div className="h-[80vh] w-full grid place-content-center">
      <div className="p-7 shadow-md rounded-md max-w-96 text-center">
        <Image
          src="/logo.png"
          alt="Success"
          width={70}
          height={70}
          className="mx-auto my-5"
        />
        <h2 className="text-2xl font-semibold mb-5 text-green-700">
          Submission Successful
        </h2>
        <p className="text-sm text-gray-500">
          Your submission has been received and is being processed. You will be
          notified when your account is activated.
        </p>
        <Button
          className="mt-5"
          onClick={() => {
            console.log("clicked");
            router.push("/");
          }}
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}
