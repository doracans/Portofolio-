import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-purple-800 text-center py-8">
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
          <a href="https://github.com/doracans" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/saharani-pusfita/" className="hover:underline">LinkedIn</a>
          <a href="https://www.behance.net/shrvitasaharani" className="hover:underline">Instagram</a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
