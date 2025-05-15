import React from 'react';

interface TeamMember {
  name: string;
  photo: string;
  role: string;
  bio: string;
}

const TeamSection = ({ team }: { team: TeamMember[] }) => (
  <div>
    <h2 className="text-2xl font-bold mb-8 text-center text-primary">
      Meet the Team
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member) => (
        <div
          key={member.name}
          className="bg-base-100 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary shadow"
          />
          <h3 className="text-lg font-bold text-center">{member.name}</h3>
          <p className="text-sm text-secondary font-semibold">{member.role}</p>
          <p className="text-sm text-gray-600 mt-2 text-center">{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TeamSection;
