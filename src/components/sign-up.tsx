'use client';

import React from "react";
import TextInput from "./basic/text-input";
import { PhoneInput } from "./basic/phone-input";

export default function SignUp() {
  return (
    <section className="md:flex justify-between">
      <div className="w-3/5">
        <h2 className="text-xl font-semibold mb-6">Signup a driver</h2>
        <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <TextInput
            label="Enter Full Name"
            id="fullName"
            placeholder="Jonny Ive"
          />
          <TextInput
            label="Enter Email"
            id="email"
            placeholder="John@gmail.com"
          />
          <PhoneInput />
        </div>
      </div>
    </section>
  );
}
