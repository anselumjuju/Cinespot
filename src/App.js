import React from 'react'
import "./App.css"

import { Header, Footer } from './containers'
import { Routes, Route } from 'react-router-dom'
import { Home, MoviesPage, Explore, SearchPage } from './pages'

import { movies } from './constants/constant'

const App = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/movie/:id' element={<MoviesPage data={movies} />} />
                <Route path='/search' element={<SearchPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App