import React from 'react';
import './fibbutton.css'

export default function FibButton({ children, onClick, download, href }) {
  return (
    <a href={href}  className='button name noselect' download={download}>
      {children}
    </a>
  )
}