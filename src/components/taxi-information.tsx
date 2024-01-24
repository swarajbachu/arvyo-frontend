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
          type="number"
          className="remove-arrow"
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
