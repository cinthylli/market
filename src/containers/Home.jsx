import Historical from './Historical'
import React, { useState } from 'react'
import Menu from './Menu'
import Products from './Products'

function Home() {
    const [points, setPoints] = useState(0);
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");

    return (
        <>
            <main>
                <Menu
                    category={category}
                    points={points}
                    search={search}
                    setPoints={setPoints}
                    setCategory={setCategory}
                    setSearch={setSearch}
                />
                <Products
                    category={category}
                    search={search}
                    points={points}
                />
            </main>
            <aside>

                <Historical />
            </aside>
        </>
    )
}

export default Home
