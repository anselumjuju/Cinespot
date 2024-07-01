import React from 'react'
import "./App.css"

import { Header, Footer } from './containers'
import { Home } from './pages'


const App = () => {

    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default App