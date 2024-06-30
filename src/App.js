import React from 'react'
import "./App.css"
import { Header, Footer, HeroSlider } from './containers'



const App = () => {

    return (
        <>
            <Header />
            <HeroSlider />
            <div style={{ height: "100vh" }}></div>
            <Footer />
        </>
    )
}

export default App