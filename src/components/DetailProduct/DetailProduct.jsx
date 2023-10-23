import { useParams } from 'react-router-dom';
import { voidProducts } from '../../asyncmock';
import "./DetailProduct.css"

const DetailProduct = () => {
  let { id } = useParams(); 
  const producto = voidProducts.find(item => item.id === parseInt(id, 10));

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='detail-container'>
        <img src={producto.img} alt={producto.nombre} />
        <div className='detailinfo-container'>
            <h2>{producto.nombre}</h2>   
            <h6>{producto.info}</h6>
            <p>${producto.precio}</p>
            <button>Comprar</button>
        </div>
    </div>
  );
};

export default DetailProduct;
