import React from 'react'

const date = new Date()
const year = date.getFullYear()
const Footer = () => {
  return (
    <footer>
      <p> &copy; All Rights Reserved. {year} </p>
      
    </footer>
  )
}

export default Footer
