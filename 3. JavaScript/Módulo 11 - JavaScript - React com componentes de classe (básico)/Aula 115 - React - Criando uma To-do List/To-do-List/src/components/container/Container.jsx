import React from 'react';
import './Container.css';

export default function ({children, className}) {
  return (
    <div className={`container ${className}`}> {children} </div>
  )
}
