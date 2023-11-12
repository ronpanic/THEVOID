import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/config';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'inventario'));
      const querySnapshot = await getDocs(q);
      const productsData = querySnapshot.docs.map((doc) => doc.data());
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <h2 className="name-product" style={{ textAlign: 'center' }}>
        <span className="name1-product">Last Days</span> Of VOID90s
      </h2>

      <div className="category-container">
        <h2 onClick={() => handleCategoryClick(null)}>All</h2>
        <h2 onClick={() => handleCategoryClick('Hoodie')}>Hoodie</h2>
        <h2 onClick={() => handleCategoryClick('Pantalon')}>Pantalones</h2>
        <h2 onClick={() => handleCategoryClick('Overshirt')}>Overshirt</h2>
        <h2 onClick={() => handleCategoryClick('Bermuda')}>Bermuda</h2>
      </div>

      {loading && <div className="loader">Cargando productos...</div>}

      <ItemList products={products} selectedCategory={selectedCategory} />
    </>
  );
};

export default ItemListContainer;
