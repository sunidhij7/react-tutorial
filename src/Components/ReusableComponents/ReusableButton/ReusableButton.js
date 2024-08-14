import React from 'react'
import './ReusableButton.css'

export default function ReusableButton({onClick, buttonTitle,variant}) {
  return (
    <button onClick={onClick} className={`standard-button ${variant}`} >{buttonTitle}</button>
  )
}