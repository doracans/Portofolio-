import React from 'react';

const ExperienceCard = ({ role, company, location, duration, description, technologies, image }) => {
  return (
    <div className="p-5 border rounded-xl shadow-sm bg-purple-50 hover:shadow-md transition h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{role}</h3>

        <div className="flex items-center gap-2 mt-1">
          {image && (
            <img
              src={image}
              alt={company}
              className="w-10 h-7 object-contain"
            />
          )}
          <p className="text-sm text-gray-600">
            {company} — <span className="italic">{location}</span>
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-1">{duration}</p>

        <ul className="list-disc text-sm text-gray-700 mt-3 ml-5 space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {technologies && (
        <div className="mt-4 flex flex-wrap gap-3">
          {technologies.map(({ icon: TechIcon, color }, index) => (
            <span key={index} className="text-2xl">
              <TechIcon style={{ color }} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
