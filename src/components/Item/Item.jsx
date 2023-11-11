import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = ({ nombre, precio, img, id,}) => {
  return (
    <Link to={`/producto/${id}`} className='cardProduct'>
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </Link>
  )
}

export default Item;
