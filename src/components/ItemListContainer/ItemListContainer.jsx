import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../services/config";
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [allProducts, setAllProducts] = useState([]); 
    const [product, setProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProductsCategory = async (selectedCategory) => {
        setLoading(true);
        try {
            const q = query(collection(db, 'productos'), where('categoria', '==', selectedCategory));
            const querySnapshot = await getDocs(q);
            const filteredProducts = querySnapshot.docs.map(doc => doc.data());
            return filteredProducts;
        } catch (error) {
            console.error('Error getting products:', error);
            return [];
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const q = query(collection(db, 'inventario'));
                const querySnapshot = await getDocs(q);
                const productsData = querySnapshot.docs.map(doc => doc.data());
                setProduct(productsData);
                setAllProducts(productsData);
            } catch (error) {
                console.error('Error getting products:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const handleCategoryClick = async (category) => {
        setLoading(true);
        if (category === null) {
            setSelectedCategory(null);
            setProduct(allProducts); 
            setLoading(false);
            return;
        }
        const filteredProducts = await getProductsCategory(category);
        setSelectedCategory(category);
        setProduct(filteredProducts);
        setLoading(false);
    }

    return (
        <>
            <h2 className='name-product' style={{ textAlign: "center" }}>
                <span className='name1-product'>Last Days</span> Of VOID90s
            </h2>

            <div className='category-container'>
                <h2 onClick={() => handleCategoryClick(null)}>All</h2>
                <h2 onClick={() => handleCategoryClick("Hoodie")}>Hoodie</h2>
                <h2 onClick={() => handleCategoryClick("Pantalon")}>Pantalones</h2>
                <h2 onClick={() => handleCategoryClick("Overshirt")}>Overshirt</h2>
                <h2 onClick={() => handleCategoryClick("Bermuda")}>Bermuda</h2>
            </div>

            {loading && <div className="loader">Cargando productos...</div>}

            <ItemList product={product} selectedCategory={selectedCategory} />
        </>
    )
}

export default ItemListContainer;
