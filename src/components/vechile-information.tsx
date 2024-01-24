import React from "react";
import { TextInput } from "./basic";

export default function VechileInformation() {
  return (
    <section>
      <div>
        <h3 className="text-xl font-semibold mb-6 w-full">
          Vechile Information
        </h3>
      </div>
      <TextInput
        label="Registration"
        id="vechileRegistrationNumber"
        placeholder="Vechile Registration Number"
        className="w-56"
      />
      <div className="flex gap-4 mt-7 flex-wrap grow">
        <TextInput
          label="Modal"
          id="vechileModal"
          placeholder="Enter Vechile Modal"
        />
        <TextInput label="Passengers" id="vechileMake" placeholder="F-Type" />
        <TextInput
          label="Ride Type"
          id="vechileRideType"
          placeholder="f-type"
        />
        <TextInput
          label="Body Type"
          id="vechileBodyType"
          placeholder="Enter Vechile Body Type"
        />
      </div>
      <div className="flex gap-4 mt-7 flex-wrap grow">
        <p className="text-sm font-semibold ">DVLA MOT: 09/10/2023</p>
        <p className="text-sm font-semibold ">DVLA TAX: 09/10/2023</p>
      </div>
      <div className="flex gap-4 mt-7 flex-wrap grow">
        <TextInput
          label="Plate Number"
          id="vechilePlateNumber"
          placeholder="Vechile Plate Number"
        />
        <TextInput
          label="Issued By"
          id="vechileIssuedBy"
          placeholder="Enter Issued By"
        />
      </div>
      <div className="flex gap-2 items-center">
        
      </div>
    </section>
  );
}
