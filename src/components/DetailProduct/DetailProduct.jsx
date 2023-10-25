import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { voidProducts } from '../../asyncmock';
import "./DetailProduct.css";
import Footer from '../Footer/Footer';

const DetailProduct = () => {
  let { id } = useParams(); 
  const producto = voidProducts.find(item => item.id === parseInt(id, 10));
  const [contador, setContador] = useState(1);

  const restarProducto = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const sumarProducto = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };
  
  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='detail-allcontainer'>
      <div className='detail-container'>
        <img src={producto.img} alt={producto.nombre} />
        <div className='detailinfo-container'>
          <h2>{producto.nombre}</h2>   
          <h6>{producto.info}</h6>
          <div className='line'></div>
          <div className='price-container'>
            <p>${producto.precio}</p>
            <p>Price</p>
          </div>
          <div className='line'></div>
          <div className='size-container'>
            <h3>Size:</h3>
            <div className='size'>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className='counter'>
            <button onClick={restarProducto}>-</button>
            <span>{contador}</span>
            <button onClick={sumarProducto}>+</button>
          </div>
          <button className='buy-button'>Comprar</button>
          <div className='size-guia'>
            <h2>Guía de talles:</h2>
            <p>Podras encontrar la guía de talles en la última foto</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DetailProduct;
