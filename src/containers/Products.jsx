import React from 'react'
import Card from '../components/Card'

import useFetchProducts from '../Hooks/useFetchProducts';
import './Products.css';

function Products({ category , search , points }) {

    const { data: products, loading } = useFetchProducts("");
    let categoryProducts;
    if (category === "") {
        categoryProducts = products;
    } else {
        categoryProducts = products.filter(product => product.category === category);
        console.log(categoryProducts)
        
    }
    if (search) {
        categoryProducts = categoryProducts.filter(product =>( product.name === search || product.cost === search))
    }

    return (
        <>
            <h1>{category || "Productos"}</h1>
            {loading && "cargando....."}
            <section>
                {
                    categoryProducts.map((product) => {
                        return (
                            <Card
                                category={product.category}
                                product={product.name}
                                pointsLeft={points}
                                cost={product.cost}
                                img={product.img.url}
                                id={product._id}
                                key={product._id}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}
export default Products
