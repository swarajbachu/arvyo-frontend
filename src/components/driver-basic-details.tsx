import React from "react";
import { TextInput } from "./basic";
import { FormControl } from "@/utils/form";

export default function DriverBasicDetails({control}:FormControl) {
  return (
    <section className="flex flex-wrap gap-3 items-end">
      <TextInput label="Accounting-Ref" id="accountingRef" />
      <TextInput label="Nominal-Code" id="nominalCode" />
      <TextInput label="Call-Sign" id="callsign" placeholder="Johnny Ive" />
      <TextInput label="Commission" id="commission" placeholder="20%" />
      <TextInput label="Weekly-Charge" id="weeklyCharge" placeholder="£100" />
      <TextInput label="Driver-Group" id="driverGroup" placeholder="Group A" />
    </section>
  );
}