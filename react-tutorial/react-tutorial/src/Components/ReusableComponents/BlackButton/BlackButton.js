import React from 'react'
import './BlackButton.css'

export default function BlackButton({onClick, buttonTitle}) {
  return (
    <button onClick={onClick} className='black-button'>{buttonTitle}</button>
  )
}
