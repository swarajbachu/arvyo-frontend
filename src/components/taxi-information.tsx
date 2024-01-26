import React from "react";
import { TextInput } from "./basic";
import { FormControl } from "@/utils/form";
import { Controller } from "react-hook-form";

export default function TaxiInformation({control}:FormControl) {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-6 w-full">
        Taxi or PH Badge Information
      </h3>
      <div className="flex gap-4 flex-wrap grow">
        <Controller
        control={control}
        name="driverType"
        render={({ field }) => (
          <TextInput
            label="Driver Type"
            id="driverType"
            placeholder="Enter Driver Type"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="issuedBy"
        render={({ field }) => (
          <TextInput
            label="Issued By"
            id="issuedBy"
            placeholder="Enter Issued By"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="badgeNumber"
        render={({ field }) => (
          <TextInput
            label="Badge Number"
            id="badgeNumber"
            placeholder="Enter Badge Number"
            type="number"
            {...field}
          />
        )}
      />
      </div>
      <div className="flex my-2">
        <button className="px-4 py-2 shadow-md border border-gray-300 rounded-md">
          Safeguarding Certificate
        </button>
        <button className="px-4 py-2 shadow-md border border-gray-300 rounded-md ml-4">
          B-Tech
        </button>
        <button className="px-4 py-2 shadow-md border border-gray-300 rounded-md ml-4">
            Wheelchair Certificate
        </button>
      </div>
    </section>
  );
}
