import { z } from "zod";
import { Control, FieldValues } from "react-hook-form";

export const schema = z.object({
  fullName: z.number(),
  phoneNumber: z.string(),
  emailAddress: z.string().email(),
  accountingRef: z.string(),
  nominalCode: z.string(),
  callSign: z.string(),
  commission: z.number(),
  weeklyCharge: z.number(),
  driverGroup: z.string(),
  homeAddress: z.string(),
  dvaLicence: z.string(),
  driverType: z.string(),
  issuedBy: z.string(),
  badgeNumber: z.string(),
  registration: z.string(),
  model: z.string(),
  passengers: z.string(),
  rideType: z.string(),
  bodyType: z.string(),
  plateNumber: z.string(),
  plateIssuedBy: z.string(),
  insuranceNumber: z.string(),
});

export type driverFormType = z.infer<typeof schema>;


export interface FormControl {
    control: Control<FieldValues, any>;
}
  