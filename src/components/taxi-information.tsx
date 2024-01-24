import React from "react";
import { TextInput } from "./basic";

export default function TaxiInformation() {
  return (
    <section>
      <h3 className="text-xl font-semibold mb-6 w-full">
        Taxi or PH Badge Information
      </h3>
      <div className="flex gap-4 flex-wrap grow">
        <TextInput
          label="Driver Type"
          id="driverType"
          placeholder="Enter Driver Type"
        />
        <TextInput
          label="Issued By"
          id="issuedBy"
          placeholder="Enter Issued By"
        />
        <TextInput
          label="Badge Number"
          id="badgeNumber"
          placeholder="Enter Badge Number"
        />
      </div>
    </section>
  );
}
