
import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { EXPERIENCES } from '../utils/data';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-13 ">
      <div className="container mx-auto px-8 md:px-10 py-10 max-w-[1200px]">
        <div className="w-full text-center">
          <h4 className="section-title">Experience</h4>
          <p className="text-sm mt-4 leading-6">
            My journey includes hands-on experience in backend APIs, UI/UX design, React frontend, WordPress development, and digital strategy.
            {/* My journey includes hands-on experience in backend APIs, UI/UX design, React frontend development, WordPress website building, and executing digital strategies across real-world projects. */}

          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              <ExperienceCard
                image={exp.image}
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
