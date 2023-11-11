import React, { useState, createContext, useContext, useEffect, useCallback } from 'react';

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem('carrito')) || []
  );

  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem('total')) || 0
  );
  const [cantidadTotal, setCantidadTotal] = useState(
    JSON.parse(localStorage.getItem('cantidadTotal')) || 0
  );

  const actualizarTotales = useCallback(() => {
    let nuevoTotal = 0;
    let nuevaCantidadTotal = 0;

    carrito.forEach((producto) => {
      nuevoTotal += producto.item.precio * producto.cantidad;
      nuevaCantidadTotal += producto.cantidad;
    });

    setTotal((prev) => prev + nuevoTotal);
    setCantidadTotal((prev) => prev + nuevaCantidadTotal);

    
    localStorage.setItem('total', JSON.stringify(prev + nuevoTotal));
    localStorage.setItem('cantidadTotal', JSON.stringify(prev + nuevaCantidadTotal));
  }, [carrito, setTotal, setCantidadTotal]);

  const agregarAlCarrito = useCallback((item, cantidad, talla) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad, talla }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      setCarrito((prev) => {
        return prev.map((prod) => {
          if (prod.item.id === item.id) {
            return { ...prod, cantidad: prod.cantidad + cantidad };
          } else {
            return prod;
          }
        });
      });
    }

    
    actualizarTotales();
  }, [carrito, actualizarTotales]);

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);

    setCarrito(carritoActualizado);

    
    actualizarTotales();
  };

  const vaciarCarrito = () => {
    setCarrito([]);

    
    actualizarTotales();
  };

    
  useEffect(() => {
    
    let nuevoTotal = 0;
    let nuevaCantidadTotal = 0;

    carrito.forEach((producto) => {
      nuevoTotal += producto.item.precio * producto.cantidad;
      nuevaCantidadTotal += producto.cantidad;
    });

    setTotal(nuevoTotal);
    setCantidadTotal(nuevaCantidadTotal);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;
