import Item from '../Item/Item'
import "./ItemList.css"


const ItemList = ({ product, selectedCategory }) => {
  const filteredProducts = selectedCategory
      ? product.filter(item => item.categoria === selectedCategory)
      : product;


  return (
      <div className='product-container1'>
          {filteredProducts.map(item => <Item key={item.nombre} {...item} />)}
      </div>
  )
}

export default ItemList;
