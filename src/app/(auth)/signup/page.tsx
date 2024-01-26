"use client";

import { auth } from "@/utils/firebase";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import {toast} from "sonner";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [error, setError] = useState("");

  const SignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all the fields");
      setError("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      toast.loading("Creating Account...");
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, { displayName: name });
          toast.success("Hurray!! You're Account is Created");
          router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          toast.error(errorMessage);
          setError(errorMessage);
          throw error;
          // ..
        });
    } catch (err) {
      console.log(err);
    }
    toast.dismiss();
    setLoading(false);
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Aryvo</h1>
          <p className="text-white mt-1">Driver Login Portal</p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={SignUp}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello 👋🏻</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome !!</p>
          {error && (
            <div className="shadow-md rounded-xl p-4 my-4 text-red-500 w-80 mx-auto">
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          )}
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Full name"
            />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              value={email}
              className="pl-2 outline-none border-none"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center w-80 border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              value={password}
              className="pl-2  outline-none border-none"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Create Account
          </button>
          <p className="text-sm text-gray-500 text-center flex">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
