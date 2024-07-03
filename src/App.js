import React from 'react'
import "./App.css"

import { Header, Footer } from './containers'
import { Home, MoviesPage, Explore } from './pages'
import { movies } from './constants/constant'

const App = () => {

    return (
        <>
            <Header />
            <Explore />
            <Footer />
        </>
    )
}

export default App