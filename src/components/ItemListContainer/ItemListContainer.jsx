import { useState, useEffect } from 'react';
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProducts()
            .then(respuesta => setProduct(respuesta))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h2 className='name-product' style={{ textAlign: "center" }}> <span className='name1-product'>Last Days</span> Of VOID90s</h2>
            <ItemList product={product} />
        </>
    )
}

export default ItemListContainer;
