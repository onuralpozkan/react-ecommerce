import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let {productId} = useParams();
    console.log("Params", productId);
    return (
        <div>
            Product Detail Page -  {productId}
        </div>
    )
}

export default ProductDetail
