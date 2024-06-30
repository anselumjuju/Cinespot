import React from 'react'
import "./App.css"
import { Header, Footer, HeroSlider, TrendingCards, MovieLists1, MovieLists2 } from './containers'



const App = () => {

    return (
        <>
            <Header />
            <MovieLists2 title="Trending" />
            <div style={{ height: "100vh" }}></div>
            <Footer />
        </>
    )
}

export default App