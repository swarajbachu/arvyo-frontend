import React from "react";
import { TextInput } from "./basic";

export default function LicenseInformation() {
  return (
    <section>
      <div className="flex gap-5 items-center mb-6">
        <h2 className="text-xl font-semibold">License Information</h2>
        <p className="text-sm text-gray-500 cursor-pointer">
         Click for manual entry
        </p>
      </div>
      <div className="grid gap-3 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <TextInput
          label="DVLA License"
          id="license"
          placeholder="Enter DVLA License"
        />
        {/* <div className="flex flex-col">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            License Expiration Date
          </label>
          <input
            type="date"
            id="licenseExpirationDate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div> */}
      </div>
    </section>
  );
}
