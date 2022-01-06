import React from 'react';
import './skillbar.css';
import styled, { keyframes } from 'styled-components';


export default function SkillBar({ title, progress }) {


  const skillbar__progress__animation = keyframes`
  0%{
    width: 0%;
  }
  
  100%{
    width: ${progress}%;
  }
  `

  const Skillbar__progress = styled.span`
  width: ${progress}%;
  animation: ${skillbar__progress__animation} 2s;
  `
  return (
    <div className='skillbar'>
      <h3 className='skillbar__title'>{title}</h3>
      <span className='skillbar__bar'>
        <Skillbar__progress/>
      </span>
    </div>
  )
}