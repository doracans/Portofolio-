// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='bg-purple-100 text-ts text-secondary text-center p-5'>
//       Sayonara🌼
//     </div>
//   )
// }

// export default Footer
// import React from 'react'
// import { FaEnvelope } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <footer className='bg-white text-secondary text-sm px-6 py-5'>
//       <hr className="border-purple-700 my-4 mx-auto w-4/5" />

//       <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto mt-6 gap-3">
//         <p>© 2025 Saharani Pusfita. All rights reserved.</p>
//         <div className="flex items-center gap-2">
//           <FaEnvelope className="text-base" />
//           <span>shrvitasaharani@gmail.com</span>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-purple-500 text-center py-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pusfita</h2>
        <div className="flex justify-center items-center gap-3 text-sm">
          <FaEnvelope className="text-lg" />
          <span>shrvitasaharani@gmail.com</span>
        </div>
      </div>

      <hr className="border-purple-700 my-4 mx-auto w-4/5" />

      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto mt-6 gap-3">
        <p className="mb-2 md:mb-0">© 2025 Saharani Pusfita. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:shrvitasaharani@gmail.com" className="hover:underline">Gmail</a>
          <a href="https://www.linkedin.com/in/saharani-pusfita/" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/doracans" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
