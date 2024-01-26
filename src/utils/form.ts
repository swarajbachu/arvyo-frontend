import { z } from "zod";
import { Control, FieldValues } from "react-hook-form";

export const schema = z.object({
  fullName: z.string(),
  phoneNumber: z.string(),
  emailAddress: z.string().email(),
  accountingRef: z.string(),
  nominalCode: z.string(),
  callSign: z.string(),
  commission: z.number().min(0).max(100),
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
  ppeBarrier: z.boolean().default(false),
  disabledAccess: z.boolean().default(false),
  premiumVechile: z.boolean().default(false),
  hackneyCarriage: z.boolean().default(false),
  pets: z.boolean().default(false),
  wideCar: z.boolean().default(false),
});

export type driverFormType = z.infer<typeof schema>;


export interface FormControl {
    control: Control<driverFormType, any>;
}
  