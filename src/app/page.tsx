'use client'

import { Divider, TextInput } from "@/components/basic";
import Documents from "@/components/documents";
import DriverBasicDetails from "@/components/driver-basic-details";
import LicenseInformation from "@/components/license-information";
import SignUp from "@/components/sign-up";
import TaxiInformation from "@/components/taxi-information";
import VechileInformation from "@/components/vechile-information";

export default function Home() {
  return (
    <div className="min-h-screen lg:flex gap-6">
      <div className="w-full lg:w-3/5 lg:pr-5 lg:border-r">
        <SignUp />
        <Divider />
        <DriverBasicDetails />
        <div className="my-8"/>
        <TextInput label="Home Address" id="homeaddress" />
        <Divider />
        <LicenseInformation />
        <Divider />
        <TaxiInformation />
        <Divider />
        <VechileInformation />
      </div>
      <Documents />
    </div>
  );
}