// import React from 'react';
// import ExperienceCard from '../components/ExperienceCard';
// import { EXPERIENCES } from '../utils/data';
// import { motion } from 'framer-motion';

// const ExperienceSection = () => {
//   return (
//     <section id="experience" className="mt-13">
//       <div className="container mx-auto p-10">
//         <div className="w-full lg:w-[60vw] mx-auto text-center">
//           <h4 className="section-title">Experience</h4>
//           <p className="text-sm mt-4 leading-6">
//             My journey includes hands-on experience in both development and design roles — from UI/UX design to frontend implementation in real-world projects.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
//           {EXPERIENCES.map((exp, index) => {
//             // Mapping posisi berdasarkan index
//             const positionClasses = [
//               'col-span-2 md:col-span-2 justify-self-end', // Posisi kiri atas
//               'col-span-2 md:col-span-2 justify-self-start', // Posisi kanan atas
//               'col-span-2 md:col-start-2 col-end-4 justify-self-center', // Tengah bawah
//             ];

//             return (
//               <motion.div
//                 key={exp.id}
//                 className={positionClasses[index]}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//               >
//                 <ExperienceCard
//                   role={exp.role}
//                   company={exp.company}
//                   location={exp.location}
//                   duration={exp.duration}
//                   description={exp.description}
//                   technologies={exp.technologies}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;

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
            My journey includes hands-on experience in both development and design roles — from UI/UX design to frontend implementation in real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
