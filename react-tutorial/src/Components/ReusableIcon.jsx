import React from 'react'

function ReusableIcon({iconData}) {
  
    return (
    
    <>
    <svg
            className="feature-card-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={iconData} fill="#000000"></path>
          </svg>
    </>
  )
}

export default ReusableIcon