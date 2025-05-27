import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { EXPERIENCES } from '../utils/data';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-white mt-13">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto text-center">
          <h4 className="section-title">Experience</h4>
          <p className="text-sm mt-4 leading-6">
            My journey includes hands-on experience in both development and design roles — from UI/UX design to frontend implementation in real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ExperienceCard
                role={exp.role}
                company={exp.company}
                location={exp.location}
                duration={exp.duration}
                description={exp.description}
                technologies={exp.technologies}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
