// src/components/layout.js

import React from "react"
import Navbar from "./Navbar"
import Footer from "./footer"
import SocialMedia from "./socialMedia"

const Layout = ({ children }) => (
  <div>
    <SocialMedia />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default Layout
