import React from 'react'

import { Link } from 'react-router-dom'

import './POPOSSpace.css'

function POPOSSpace(props) {
  const  { name, image, address, hours, id } = props
  return (
    <Link to={`/details/${id}`} className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <div>{address}</div>
      <div>{hours}</div>
    </Link>
  )
}

export default POPOSSpace
