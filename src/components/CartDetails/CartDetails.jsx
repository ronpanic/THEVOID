import React, { useContext, useState } from 'react';
import { CarritoContext } from '../Context/CartContext';
import "./CartDetails..css";
import Footer from '../Footer/Footer';

const CartDetails = () => {
  const { carrito, total, cantidadTotal, vaciarCarrito, eliminarProducto } = useContext(CarritoContext);
  const [checkoutClicked, setCheckoutClicked] = useState(false);
  const [compraRealizada, setCompraRealizada] = useState(false);

  const handleEliminarProducto = (id) => {
    eliminarProducto(id);
  };

  const handleVaciarCarrito = () => {
    vaciarCarrito();
  };

  const handleCheckout = () => {
    if (carrito.length === 0) {
      alert('No hay productos en el carrito. Agrega productos antes de realizar el pago.');
    } else {
      setCheckoutClicked(true);
    }
  };
  
  const handleAceptar = () => {
    setCompraRealizada(true);
    setCheckoutClicked(false);
    
    
    setTimeout(() => {
      setCompraRealizada(false);
      handleVaciarCarrito();
    }, 5000);
    
  };

  

  return (
    <div>
      <div className='cart-container'>
        <div className='cartleft-container'>
          <div className='carttitle-container'>
            <img className='cart-image' src="https://cdn.discordapp.com/attachments/791413136111697935/1168021812278464633/Untitled1-removebg-preview.png?ex=65504014&is=653dcb14&hm=296c55b267afa705321abdfe5d03892736128d3b1f0a27086876536fe0a0139e&" alt="" />
            <h2>Carrito de compra</h2>
            <button className='cleancart-button'  onClick={handleVaciarCarrito}>Vaciar Carrito</button>
          </div>
          
          <ul>
            {carrito.map((producto) => (
              <li className='cart-item' key={producto.item.id}>
                <img src={producto.item.img} alt={producto.item.nombre} />
                <div className='cart-item-info'>
                  <div className='cartmaininfo2-container'>
                    <div className='cartmaininfo-container'>
                      <h3>{producto.item.nombre}</h3>
                      <p>${producto.cantidad * producto.item.precio}</p>
                    </div>
                    <button onClick={() => handleEliminarProducto(producto.item.id)}>x</button>
                  </div>
                  <div className='cartsecondinfo-container'>
                    <p>Size: {producto.talla}</p>
                  </div>
                  <p className='cantidad'>Cantidad: {producto.cantidad}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
          
        <div className='cartright-container'>
          <div className='rightinfo-container'>
            <div className='nameinfo-container'>
              <div>
                <h4>Martin Aguirre D.</h4>
                <p>Lujan . Lavalle 2823</p>
                <p>Adress 2 (Optional)</p>
                <p>Buenos Aires, Argentina</p>
              </div>
              <div className='edit-container'>
                <p>Edit</p>
              </div>
            </div>

            <div className='payment-container'>
              <div>
                <h4>Payment method</h4>
                <p>Credit card</p>
                <p>****  ****  **** 5057</p>
              </div>
              <div className='edit-container'>
                <p>Edit</p>
              </div>
            </div>

            <div className='discount-container'>
              <h4>¿Tenes algun codigo de descuento?</h4>
              <p>Solo 1 codigo de descuento por orden.</p>
              <div>
                <input type="number" id="numero" name="numero" placeholder="Your code here" />
                <button>APPLY</button>
              </div>
            </div>

            {!checkoutClicked && (
              <div className='totalclean-container'>
                <div>
                  <p>Cantidad Total: {cantidadTotal}</p>
                  <p>Total (Incl. VAT)</p>
                  <p className='totalprice'>${total}</p>
                </div>
                <div>
                  <button onClick={handleCheckout}><ion-icon name="lock-closed-outline"></ion-icon> CHECKOUT</button>
                </div>
              </div>
            )}
            {checkoutClicked && !compraRealizada && (
              <div className='acept-container'>
                <h4>¿Estás seguro de que quieres realizar esta compra?</h4>
                <div>
                  <button onClick={handleAceptar}>ACEPTAR</button>
                  <button onClick={() => setCheckoutClicked(false)}>CANCELAR</button>
                </div>
              </div>
            )}
            {compraRealizada && <p className='comprafinish'>COMPRA REALIZADA</p>}
          </div>
        </div>
      </div>
      <div className='cartfooter'>
          <div className="cartfooter-line"></div>
          <h5>Copyright THEVOID - 2023. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos <a href="">ingrese aquí</a></h5>
      </div>
    </div>

  );
}

export default CartDetails;
