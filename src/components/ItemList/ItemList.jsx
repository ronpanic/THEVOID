import Item from '../Item/Item'
import "./ItemList.css"


const ItemList = ({ product }) => {
  return (
    <div className='product-container1'>
      {product.map(item => <Item key={item.nombre} {...item} />)}
    </div>
  )
}


export default ItemList