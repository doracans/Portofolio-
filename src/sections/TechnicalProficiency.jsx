import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';
import Tabs from '../components/Tabs';  // Pastikan komponen Tabs sudah tersedia
import { SKILLS, SKILL_TABS } from '../utils/data';
import { motion } from 'framer-motion';

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState([]);
  const [activeTab, setActiveTab] = useState(SKILL_TABS[0].value);

  const handleTabValueChange = (value) => {
    const updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
  };

  // Load default data saat komponen pertama kali dirender
  React.useEffect(() => {
    handleTabValueChange(SKILL_TABS[0].value);
  }, []);

  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Project Development</h4>
          <p className="text-sm text-center mt-4 leading-6">
          Possess a diverse set of skills in design and programming 
          to successfully complete projects, supported by adequate
          expertise and several relevant certifications.
          </p>
        </div>

        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onTabChange={handleTabValueChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-4 gap-x-5 gap-y-5 mt-10">
          {tabData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard
                icon={skill.icon}
                skills={skill.skills}
                description={skill.description}
                image={skill.image}
                link={skill.link}

              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
