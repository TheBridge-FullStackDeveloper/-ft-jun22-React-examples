import React, { useContext } from 'react'
import { themeContext } from '../../context/themeContext'; // contexto

function Footer() {
  const {theme} = useContext(themeContext); // consumer

  return (
    <footer className={"footer"+theme}>Developed with ♥ by Full Stack @ The Bridge</footer>
  )
}

export default Footer