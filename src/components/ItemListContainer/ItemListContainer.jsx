import React, { useState, useEffect } from 'react';
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [allProducts, setAllProducts] = useState([]); 
    const [product, setProduct] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProductsCategory = (selectedCategory) => {
        setLoading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                const filteredProducts = selectedCategory
                    ? allProducts.filter(item => item.categoria === selectedCategory)
                    : allProducts;
                resolve(filteredProducts);
                setLoading(false);
            }, 500);
        });
    }

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then(respuesta => {
                setProduct(respuesta);
                setAllProducts(respuesta);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const handleCategoryClick = (category) => {
        setLoading(true);
        if (category === null) {
            setSelectedCategory(null);
            setProduct(allProducts); 
            setLoading(false);
            return;
        }
        getProductsCategory(category)
            .then(filteredProducts => {
                setSelectedCategory(category);
                setProduct(filteredProducts);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
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
