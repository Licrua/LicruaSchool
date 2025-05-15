import React from 'react';

const ValuesSection = ({ values }: { values: string[] }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-center text-accent">
      Our Values
    </h2>
    <div className="flex flex-wrap justify-center gap-3">
      {values.map((value: string) => (
        <span
          key={value}
          className="badge badge-lg badge-outline badge-accent px-4 py-3 text-base font-semibold shadow"
        >
          {value}
        </span>
      ))}
    </div>
  </div>
);

export default ValuesSection;
