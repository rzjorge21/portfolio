import React from 'react';
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import './navbar.css'

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  console.log(match)
  let customClassname = match ? 'navbar__item navbar__item__selected' : 'navbar__item';

  return (
    <Link
      className={customClassname}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default function Navbar(props) {
  return (
    <nav className='navbar'>
      <span>
        <img
          src={"/Profile.PNG"}
          className="navbar__icon"
        />
        <span className="navbar__title bold">Jorge Ramón</span>
      </span>
      <div className="navbar__items">
        <CustomLink to="/">Inicio</CustomLink>
        <CustomLink to="/about">Sobre mí</CustomLink>
        <CustomLink to="/experience">Experiencia</CustomLink>
        <CustomLink to="/contact">Contáctame</CustomLink>
      </div>
    </nav>
  )
}