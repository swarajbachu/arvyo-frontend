"use client";

import { Divider, TextInput } from "@/components/basic";
import Documents from "@/components/documents";
import DriverBasicDetails from "@/components/driver-basic-details";
import LicenseInformation from "@/components/license-information";
import SignUp from "@/components/sign-up";
import TaxiInformation from "@/components/taxi-information";
import VechileInformation from "@/components/vechile-information";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/utils/form";

export default function Dashboard() {
  const { control, watch } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <section className="min-h-screen w-full">
      <h3 className="text-sm text-blue-600 ml-5">Register Driver</h3>
      <Divider className="my-2" />
      <div className="p-6 lg:flex gap-6">
        <div className="w-full lg:w-3/5 lg:pr-5 lg:border-r">
          <SignUp control={control} />
          <Divider />
          <DriverBasicDetails control={control} />
          <div className="my-8" />
          <TextInput label="Home Address" id="homeaddress" />
          <Divider />
          <LicenseInformation control={control} />
          <Divider />
          <TaxiInformation control={control} />
          <Divider />
          <VechileInformation control={control} />
        </div>
        <div>
        <Documents />
        </div>
      </div>
    </section>
  );
}
