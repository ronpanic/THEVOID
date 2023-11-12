import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ products, selectedCategory }) => {
  const filteredProducts = selectedCategory
      ? products.filter(item => item.categoria === selectedCategory)
      : products;

  return (
      <div className='product-container1'>
          {filteredProducts.map(item => <Item key={item.nombre} {...item} />)}
      </div>
  );
}

export default ItemList;
