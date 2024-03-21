// src/components/Navbar.js

import React, { useState } from "react"
import { Link } from "gatsby"
import '../styles/components/navbar.css'
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className=" navbar">
      <div className="mx-auto px-4 py-5 flex justify-between ">
        <div className="flex items-center ">
          <Link to="/" className="text-white font-bold text-lg ">
            <button className="navbar-link">
              <StaticImage
                src="../images/LOGOHISTORIASYOMAYOR.svg"
                alt="Ejemplo de imagen"
                width={180} />
            </button>
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center flex-grow">
          <Link to="/about" className="text-white mx-4">
            <button className="navbar-link"> Quienes somos </button>
          </Link>
          <Link to="/virtualSchool" className="text-white mx-4">
            <button className="navbar-link"> Escuela virtual Yo Mayor </button>
          </Link>
          <Link to="/lastversion" className="text-white mx-4">
            <button className="navbar-link"> Versiones anteriores</button>
          </Link>
          <Link to="/toolbox" className="text-white mx-4">
            <button className="navbar-link">Caja de herramientas</button>
          </Link>
          <Link to="/community" className="text-white mx-4">
            <button className="navbar-link">Comunidad Yo Mayor</button>
          </Link>
          <Link to="/contactus" className="text-white mx-4">
            <button className="navbar-link">Contáctanos</button>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
                <button className="navbar-link"> Quienes somos </button>
            </Link>
            <Link
              to="/virtualSchool"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <button className="navbar-link"> Escuela virtual Yo Mayor </button>
            </Link>
            <Link
              to="/lastversion"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <button className="navbar-link"> Versiones anteriores</button>
            </Link>
            <Link
              to="/toolbox"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <button className="navbar-link">Caja de herramientas</button>
            </Link>
            <Link
              to="/community"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <button className="navbar-link">Comunidad Yo Mayor</button>
            </Link>
            <Link
              to="/contactus"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <button className="navbar-link">Contáctanos</button>
            </Link>

          </div>
        </div>
      )}
    </nav>
    
  )
}

export default Navbar
