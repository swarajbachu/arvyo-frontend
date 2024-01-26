"use client";

import { Button, Divider, TextInput } from "@/components/basic";
import Documents from "@/components/documents";
import DriverBasicDetails from "@/components/driver-basic-details";
import LicenseInformation from "@/components/license-information";
import SignUp from "@/components/sign-up";
import TaxiInformation from "@/components/taxi-information";
import VechileInformation from "@/components/vechile-information";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { driverFormType, schema } from "@/utils/form";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth } from "@/components/provider/auth";
import { useState } from "react";
import { fireCollection } from "@/utils/firebase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const { control, watch, formState } = useForm<driverFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      accountingRef: "",
      nominalCode: "",
      callSign: "",
      commission: 0,
      weeklyCharge: 0,
      driverGroup: "",
      homeAddress: "",
      dvaLicence: "",
      driverType: "",
      issuedBy: "",
      badgeNumber: "",
      registration: "",
      model: "",
      passengers: "",
      rideType: "",
      bodyType: "",
      plateNumber: "",
      plateIssuedBy: "",
      insuranceNumber: "",
      ppeBarrier: false,
      disabledAccess: false,
      premiumVechile: false,
      hackneyCarriage: false,
      pets: false,
      wideCar: false,
    },
  });

  const router = useRouter();
  const formValues = watch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState.errors);
    console.log(e.target);
    try {
      toast.loading("Submitting...");
      const specificId = String(currentUser?.uid);
      const specificDocRef = doc(fireCollection, specificId);
      await setDoc(specificDocRef, formValues);
      localStorage.setItem("status", "applied");
      router.push("/success");
      toast.success("You have done it, Submitted Successfully", { duration: 5000 });
    } catch (error: any) {
      toast.error(`${error}`);
    } 
      setLoading(false);
    toast.dismiss();
  };

  return (
    <section className="min-h-screen w-full">
      <h3 className="text-sm text-blue-600 ml-5">Register Driver</h3>
      <Divider className="my-2" />
      <form onSubmit={onSubmit}>
        <div className="p-6 lg:flex gap-6">
          <div className="w-full lg:w-3/5 lg:pr-5 lg:border-r">
            <SignUp control={control} />
            <Divider />
            <DriverBasicDetails control={control} />
            <div className="my-8" />
            <Controller
              control={control}
              name="homeAddress"
              render={({ field }) => (
                <TextInput label="Home Address" id="homeaddress" {...field} />
              )}
            />
            <Divider />
            <LicenseInformation control={control} />
            <Divider />
            <TaxiInformation control={control} />
            <Divider />
            <VechileInformation control={control} />
          </div>
          <div>
            <Documents />
            <Button
              type="submit"
              className="w-full mt-4"
              disabled={formState.isSubmitting || loading}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}
