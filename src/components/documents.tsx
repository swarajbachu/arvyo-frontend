import React from "react";
import DocumentComponent from "./basic/documentComponent";

const documentComponent = [
  {
    label: "DVLA License",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Compliance Certificate",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Insurance Certificate",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Proof of Address",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Vechile Plate",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Hackney Badge Licence",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Private Hire Badge Licence",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Operator Licence",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Public Liability ",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Employers Liability ",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Form B",
    date: "12/12/2021",
    days: "12 days",
  },
  {
    label: "Enhanced DBS",
    date: "12/12/2021",
    days: "12 days",
  },
];

export default function Documents() {
  return (
    <section className="max-lg:mt-6">
      <h2 className="text-xl font-semibold mb-6">Documents and Expiry Dates</h2>
      <div className="flex flex-col gap-2">
        {documentComponent.map((item) => (
          <DocumentComponent
            key={item.label}
            label={item.label}
            date={item.date}
            days={item.days}
          />
        ))}
      </div>
    </section>
  );
}
