import React from 'react';

const SkillCard = ({ icon, skills, description, image, link }) => {
  const icons = Array.isArray(icon) ? icon : [icon];
  return (
    <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition flex flex-col justify-between h-full">
        {image && <img src={image} alt={skills} className="w-full h-32 object-cover rounded-md mb-2" />}
        <h3 className="text-lg font-semibold">{skills}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center space-x-3 mb-2 mt-2">
          {icons.map((IconComponent, index) => (
            <IconComponent key={index} className="w-6 h-6 text-primary" />
          ))}
        </div>
      </div>
    </a>
  );
};
export default SkillCard;