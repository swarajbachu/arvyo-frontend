import React from "react";
import { Controller } from "react-hook-form";
import { PhoneInput, TextInput } from "./basic";
import { FormControl, schema } from "@/utils/form";

export default function SignUp({ control }: FormControl) {
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
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <PhoneInput
              id="phoneNumber"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <TextInput
              label="Enter Email"
              id="email"
              placeholder="John@gmail.com"
              {...field}
            />
          )}
        />
      </div>
    </section>
  );
}
