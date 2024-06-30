import React, { useState } from 'react'
import './header.css'

import { PrimaryButton } from '../components'
import { RxHamburgerMenu, RxCross2, RxMagnifyingGlass } from "react-icons/rx";


const Header = () => {

    const [search, setSearch] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        if (search)
            handleSearch()
        setShowSearch(!showSearch)
    }
    const handleSearch = () => {
        alert('Search '+ search)
        setSearch('');
    }


    return (
        <div className='header'>
            <p className="header-logo">Cine<span>spot</span></p>
            <nav className='header-nav'>
                <p>Movies</p>
                <p>Latest</p>
                <p>TV Shows</p>
                <p>Watchlist</p>
            </nav>
            <div className="header-buttons">
                <div className="search-container">
                    {showSearch &&
                        <input type="text" name="search" id="search"
                            placeholder="Search" value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') toggleSearch();
                            }}
                        />
                    }
                    <RxMagnifyingGlass className='xxMagnifyingGlass icons' size={20} onClick={toggleSearch} />
                </div>
                <PrimaryButton text="Sign In" />
                <RxHamburgerMenu size={20} className='hamburger icons' onClick={() => setShowMenu(!showMenu)} />
            </div>
            {
                showMenu &&
                <div className="header-menu">
                    <nav className='header-menu-nav'>
                        <p>Movies</p>
                        <p>Latest</p>
                        <p>TV Shows</p>
                        <p>Watchlist</p>
                    </nav>
                    <div className="header-menu-buttons">
                        <PrimaryButton text="Sign In" />
                    </div>
                    <RxCross2 size={26} className='close icons' onClick={() => setShowMenu(!showMenu)} />
                </div>
            }

        </div>
    )
}

export default Header
