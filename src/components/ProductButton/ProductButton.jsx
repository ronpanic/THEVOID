import React from 'react'
import "./ProductButton.css"

const ProductButton = (props) => {
  return (
    <button className='product-button'>{props.lastsale}</button>
  )
}

export default ProductButton