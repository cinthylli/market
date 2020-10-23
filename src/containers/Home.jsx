import Historical from './Historical'
import React, { useState } from 'react'
import Menu from './Menu'
import Products from './Products'
import './Home.css'
// import usePagination from '../Hooks/usePagination'

function Home() {
    const [points, setPoints] = useState(0);
    const [category, setCategory] = useState("");

    return (
        <>
            <main>
                <Menu
                    category={category}
                    points={points}
                    setPoints={setPoints}
                    setCategory={setCategory}
                />
                <Products
                    category={category}
                    points={points}
                />
            </main>
            <Historical />
        </>
    )
}

export default Home
