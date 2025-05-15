import React from 'react';

const DescriptionMissionSection = ({
  description,
  mission,
}: {
  description: string;
  mission: string;
}) => (
  <div className="grid md:grid-cols-2 gap-10">
    <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary">
      <h2 className="text-2xl font-bold mb-2 text-primary">About</h2>
      <p className="text-gray-700">{description}</p>
    </div>
    <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-secondary">
      <h2 className="text-2xl font-bold mb-2 text-secondary">Our Mission</h2>
      <p className="text-gray-700">{mission}</p>
    </div>
  </div>
);

export default DescriptionMissionSection;
