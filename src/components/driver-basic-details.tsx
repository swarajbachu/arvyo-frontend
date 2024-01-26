import React from "react";
import { TextInput } from "./basic";
import { FormControl } from "@/utils/form";
import { Controller } from "react-hook-form";

export default function DriverBasicDetails({ control }: FormControl) {
  return (
    <section className="flex flex-wrap gap-3 items-end">
      <Controller
        control={control}
        name="accountingRef"
        render={({ field }) => (
          <TextInput
            label="Driver-ID"
            id="accountingRef"
            placeholder="Driver ID"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="nominalCode"
        render={({ field }) => (
          <TextInput label="Nominal-Code" id="nominalCode" {...field} />
        )}
      />
      <Controller
        control={control}
        name="callSign"
        render={({ field }) => (
          <TextInput
            label="Call-Sign"
            id="callsign"
            placeholder="Johnny Ive"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="commission"
        render={({ field }) => (
          <TextInput
            label="Commission"
            id="commission"
            placeholder="20%"
            type="number"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="weeklyCharge"
        render={({ field }) => (
          <TextInput
            label="Weekly-Charge"
            id="weeklyCharge"
            placeholder="£100"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="driverGroup"
        render={({ field }) => (
          <TextInput
            label="Driver-Group"
            id="driverGroup"
            placeholder="Group A"
            {...field}
          />
        )}
      />
    </section>
  );
}
