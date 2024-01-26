import React from "react";
import { TextInput } from "./basic";
import ToggleSwitch from "./basic/toggle";
import { FormControl } from "@/utils/form";
import { Controller } from "react-hook-form";

export default function VechileInformation({ control }: FormControl) {
  return (
    <section>
      <div>
        <h3 className="text-xl font-semibold mb-6 w-full">
          Vechile Information
        </h3>
      </div>
      <Controller
        control={control}
        name="registration"
        render={({ field }) => (
          <TextInput
            label="Registration"
            id="vechileRegistrationNumber"
            placeholder="Vechile Registration Number"
            className="w-56"
            {...field}
          />
        )}
      />
      <div className="flex gap-4 mt-7 flex-wrap grow">
        <Controller
          control={control}
          name="model"
          render={({ field }) => (
            <TextInput
              label="Model"
              id="modalType"
              placeholder="Enter Vechile Model"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="passengers"
          render={({ field }) => (
            <TextInput
              label="Passengers"
              id="passengers"
              placeholder="F-Type"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="rideType"
          render={({ field }) => (
            <TextInput
              label="Ride Type"
              id="vechileRideType"
              placeholder="f-type"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="bodyType"
          render={({ field }) => (
            <TextInput
              label="Body Type"
              id="vechileBodyType"
              placeholder="Enter Vechile Body Type"
              {...field}
            />
          )}
        />
      </div>
      <div className="flex gap-4 mt-7 flex-wrap grow">
        <p className="text-sm font-semibold ">DVLA MOT: 09/10/2023</p>
        <p className="text-sm font-semibold ">DVLA TAX: 09/10/2023</p>
      </div>
      <div className="flex gap-4 mt-7 flex-wrap grow">
        <Controller
          control={control}
          name="plateNumber"
          render={({ field }) => (
            <TextInput
              label="Plate Number"
              id="vechilePlateNumber"
              placeholder="Vechile Plate Number"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="plateIssuedBy"
          render={({ field }) => (
            <TextInput
              label="Issued By"
              id="vechileIssuedBy"
              placeholder="Enter Issued By"
              {...field}
            />
          )}
        />
      </div>
      <div className="flex flex-col my-4 gap-3 justify-start items-start">
        <Controller
          control={control}
          name="ppeBarrier"
          render={({ field }) => (
            <ToggleSwitch
              label="PPE Barrier"
              id="ppeBarrier"
              defaultChecked={false}
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="disabledAccess"
          render={({ field: { ref, ...field } }) => (
            <ToggleSwitch
              label="Disable Access"
              id="disabledAccess"
              defaultChecked={false}
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="premiumVechile"
          render={({ field: { ref, ...field } }) => (
            <ToggleSwitch
              label="Premium Vechile"
              id="premiumVechile"
              defaultChecked={false}
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="hackneyCarriage"
          render={({ field: { ref, ...field } }) => (
            <ToggleSwitch
              label="Hackney Carriage"
              id="hackneyCarriage"
              defaultChecked={false}
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="pets"
          render={({ field }) => (
            <ToggleSwitch
              label="Pets"
              id="pets"
              defaultChecked={false}
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="wideCar"
          render={({ field }) => (
            <ToggleSwitch
              label="Wide Car"
              id="wideCar"
              defaultChecked={false}
              checked={field.value || false}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name="insuranceNumber"
        render={({ field }) => (
          <TextInput
            label="Insurance Certificate Number"
            id="vechileInsuranceCertificateNumber"
            placeholder="Enter Insurance Certificate Number"
            className="w-56"
            {...field}
          />
        )}
      />
    </section>
  );
}
