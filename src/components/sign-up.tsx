"use client";

import React, { useEffect, useState } from "react";
import TextInput from "./basic/text-input";
import { PhoneInput } from "./basic/phone-input";
import { useRouter } from "next/navigation";
import { FormControl } from "@/utils/form";
import { Controller } from "react-hook-form";

export default function SignUp({control}: FormControl) {


  return (
    <section>
      <h2 className="text-xl font-semibold mb-6">Signup a driver</h2>
      <div className="grid gap-3 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-end">
        <Controller
          control={control}
          name="fullName"
          render={({ field }) => (
            <TextInput
              label="Enter Full Name"
              id="fullName"
              placeholder="Jonny Ive"
              {...field}
            />
          )}
        />
        <PhoneInput />
        <TextInput
          label="Enter Email"
          id="email"
          placeholder="John@gmail.com"
        />
        {/* {!authUser ? (
          <>
            <TextInput
              label="Enter Password"
              id="password"
              placeholder="********"
              type="password"
              value={password}
              className=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="px-4 text-sm h-12 shadow-md border border-gray-300 rounded-md"
              onClick={SignUp}
              disabled={loading}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <button
              className="px-4 text-sm h-12 shadow-md border border-gray-300 rounded-md"
              onClick={() => router.push("/")}
            >
              Go Home
            </button>
          </>
        )}
      </div>
      {authUser && (
        <p className="font-bold text-sm my-2 text-blue-600">
          you are already loggin with email {authUser.email}{" "}
        </p>)} */}
      </div>
    </section>
  );
}
