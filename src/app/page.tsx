'use client'

import { Divider, TextInput } from "@/components/basic";
import DriverBasicDetails from "@/components/driver-basic-details";
import SignUp from "@/components/sign-up";

export default function Home() {
  return (
    <div className="min-h-screen md:flex justify-between">
      <div className="w-3/5">
        <SignUp />
        <Divider />
        <DriverBasicDetails />
        <div className="my-8"/>
        <TextInput label="Home Address  Click for manual entry" id="homeaddress" />
        <Divider />

      </div>
    </div>
  );
}