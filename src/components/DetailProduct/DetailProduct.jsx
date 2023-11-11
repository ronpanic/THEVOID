import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../services/config.js';
import "./DetailProduct.css";
import Footer from '../Footer/Footer';
import { CarritoContext } from "../Context/CartContext.jsx";

const DetailProduct = () => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);
  const [imagenPrincipal, setImagenPrincipal] = useState(null);
  const [tallaSeleccionada, setTallaSeleccionada] = useState('S');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'inventario', id);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists()) {
          const productData = productSnap.data();
          setProducto(productData);
          setImagenPrincipal(productData.data.img);
        } else {
          console.log('¡Documento no encontrado!');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [id]);

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

  const handleClickComprar = () => {
    agregarAlCarrito(producto, contador, tallaSeleccionada);
  };

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <div className='detail-allcontainer'>
        <h1><Link to="/">THEVOID</Link></h1>
        <div className='detail-container'>
          <div className='additional-images'>
            <img src={producto.imgad} alt={producto.nombre} />
            <img src={producto.imgad2} alt={producto.nombre} />
            <img src={producto.imgad3} alt={producto.nombre} />
            <img src={producto.imgad4} alt={producto.nombre} />
          </div>
          <img src={producto.img} alt={producto.nombre} />
          <div className='detailinfo-container'>
            <div className='links-container'>
              <p>Inicio . {producto.nombre} . {producto.id} </p>
            </div>
            <h2>{producto.nombre}</h2>
            <div className='price-container'>
              <p>${producto.precio}</p>
              <p className='p-price'>Price</p>
            </div>
            <p>Stock: {producto.stock}</p>
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
            <button className='buy-button' onClick={handleClickComprar}>Añadir al carrito</button>
            <div className='size-guia'>
              <h2>Guía de talles:</h2>
              <p>PODRAS ENCONTRAR LA GUIA DE TALLES EN LA ULTIMA FOTO.</p>
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
