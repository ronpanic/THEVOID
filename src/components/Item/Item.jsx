import React from 'react'
import "./Item.css"

const Item = ({ nombre, precio, img }) => {
  return (
    <div id='pp' className='cardProduct'>
        <img src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>${precio}</p>
    </div>
  )
}

export default Item
