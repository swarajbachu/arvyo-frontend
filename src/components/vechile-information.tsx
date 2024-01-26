import React from "react";
import { TextInput } from "./basic";
import ToggleSwitch from "./basic/toggle";
import { FormControl } from "@/utils/form";

export default function VechileInformation({control}:FormControl) {
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
      <div className="flex flex-col my-4 gap-3 justify-start items-start">
        <ToggleSwitch label="PPE Barrier" id="toogle" />
        <ToggleSwitch label="Disable Access" id="toogle" />
        <p className="text-sm font-medium">Premium Vechile </p>
        <p className="text-sm font-medium ">Hackney Carriage </p>
        <p className="text-sm font-medium">Pets </p>
        <p className="text-sm  ">Wide Car </p>
      </div>
      <TextInput
        label="Insurance Certificate Number" 
        id="vechileInsuranceCertificateNumber"
        placeholder="Enter Insurance Certificate Number"
        className="w-56"
      />
    </section>
  );
}
