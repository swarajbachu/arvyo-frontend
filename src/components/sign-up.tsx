"use client";

import React, { useEffect, useState } from "react";
import TextInput from "./basic/text-input";
import { PhoneInput } from "./basic/phone-input";
import { auth } from "@/utils/firebase";
import { toast } from "sonner";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
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

  const SignUp = async () => {
    try {
      toast.loading("Creating Account...");
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success("Account Created Successfully");
          router.push("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          toast.error(errorMessage);
          // ..
        });
    } catch (err) {
      console.log(err);
      // toast.error(err);
    }
    toast.dismiss();
  };
  return (
    <section className="">
      <h2 className="text-xl font-semibold mb-6">Signup a driver</h2>
      <div className="grid gap-3 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-end">
        <TextInput
          label="Enter Full Name"
          id="fullName"
          placeholder="Jonny Ive"
        />
        <PhoneInput />
        <TextInput
          label="Enter Email"
          id="email"
          placeholder="John@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!authUser ? (
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
        </p>)}
    </section>
  );
}
