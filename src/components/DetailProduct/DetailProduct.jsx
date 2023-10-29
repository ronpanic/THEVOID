import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { voidProducts } from '../../asyncmock';
import "./DetailProduct.css";
import Footer from '../Footer/Footer';
import { CarritoContext } from "../Context/CartContext.jsx";

const DetailProduct = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  let { id } = useParams();
  const producto = voidProducts.find(item => item.id === parseInt(id, 10));
  const [contador, setContador] = useState(1);
  const [imagenPrincipal, setImagenPrincipal] = useState(producto.img);

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

  const cambiarImagenPrincipal = (nuevaImagen) => {
    setImagenPrincipal(nuevaImagen);
  }

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const [tallaSeleccionada, setTallaSeleccionada] = useState('S');

  const handleClickComprar = () => {
    agregarAlCarrito(producto, contador, tallaSeleccionada);
  };



  return (
    <div>
      <div className='detail-allcontainer'>
        <h1><Link to="/">THEVOID</Link></h1>
        <div className='detail-container'>
          <div className='additional-images'>
            {producto.imgAdditional.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional Image ${index + 1}`}
                onClick={() => cambiarImagenPrincipal(img)}
              />
            ))}
          </div>
          <img src={imagenPrincipal} alt={producto.nombre} />
          <div className='detailinfo-container'>
            <div className='links-container'>
              <p>Inicio . {producto.nombre} . {producto.id} </p>
            </div>
            <h2>{producto.nombre}</h2>
            <div className='price-container'>
              <p>${producto.precio}</p>
              <p className='p-price'>Price</p>
            </div>
            <div className='line'></div>
            <div className='size-container'>
              <h3>Size:</h3>
              <div className='size'>
                <button
                  className={tallaSeleccionada === 'S' ? 'selected' : ''}
                  onClick={() => setTallaSeleccionada('S')}
                >
                  S
                </button>
                <button
                  className={tallaSeleccionada === 'M' ? 'selected' : ''}
                  onClick={() => setTallaSeleccionada('M')}
                >
                  M
                </button>
                <button
                  className={tallaSeleccionada === 'L' ? 'selected' : ''}
                  onClick={() => setTallaSeleccionada('L')}
                >
                  L
                </button>
                <button
                  className={tallaSeleccionada === 'XL' ? 'selected' : ''}
                  onClick={() => setTallaSeleccionada('XL')}
                >
                  XL
                </button>
                <button
                  className={tallaSeleccionada === 'XXL' ? 'selected' : ''}
                  onClick={() => setTallaSeleccionada('XXL')}
                >
                  XXL
                </button>
              </div>
          </div>

            <div className='counter'>
              <button onClick={restarProducto}>-</button>
              <span>{contador}</span>
              <button onClick={sumarProducto}>+</button>
            </div>
            <button className='buy-button' onClick={handleClickComprar}>Comprar</button>
            <div className='size-guia'>
              <h2>Guía de talles:</h2>
              <p>Podras encontrar la guía de talles en la última foto</p>
            </div>
            <h6>
              {producto.info.split('.').map((sentence, index) => (
                <div key={index}>{sentence.trim()}.</div>
              ))}
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailProduct;
