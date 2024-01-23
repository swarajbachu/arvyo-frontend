import React from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  ThemeProvider,
} from "@material-tailwind/react";
import Image from "next/image";

import { useCountries } from "@whizzy/react-country-code";

export function PhoneInput() {
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);

  let currentCountry: any = {};
  if (countries) {
    currentCountry = countries[country];
  }

  // You can further destructure the properties if needed
  const { name, flags, countryCallingCode } = currentCountry;

  return (
    <ThemeProvider>
      <div className="flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Mobile Number
        </label>
        <div className="relative flex w-full max-w-[24rem]">
          <Menu placement="bottom-start">
            <MenuHandler>
              <Button
                placeholder={name}
                ripple={false}
                variant="text"
                color="blue-gray"
                className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
              >
                <Image
                  src={flags.svg}
                  alt={name}
                  className="h-4 w-4 rounded-full object-cover"
                  width={16}
                  height={16}
                />
                {countryCallingCode}
              </Button>
            </MenuHandler>
            <MenuList
              className="max-h-[20rem] max-w-[18rem]"
              placeholder={name}
            >
              {countries.map(({ name, flags, countryCallingCode }, index) => {
                return (
                  <MenuItem
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                    onClick={() => setCountry(index)}
                    placeholder={name}
                  >
                    <Image
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                      width={20}
                      height={20}
                    />
                    {name} <span className="ml-auto">{countryCallingCode}</span>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          <Input
            crossOrigin={true}
            type="tel"
            placeholder="Mobile Number"
            className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "min-w-0",
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
