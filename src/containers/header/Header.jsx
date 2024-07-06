import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css'

import { PrimaryButton } from '../../components';
import { RxHamburgerMenu, RxCross2, RxMagnifyingGlass } from "react-icons/rx";


const Header = () => {
    const searchRef = useRef();

    const [search, setSearch] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();

    const toggleSearch = () => {
        if (search)
            handleSearch();
        setShowSearch(!showSearch);

    }

    const handleSearch = () => {
        navigate(`/search?query=${search.toLowerCase()}`)
        setSearch('');
    }

    useEffect(() => {
        if (showSearch && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showSearch]);


    return (
        <div className='header'>
            <p className="header-logo" onClick={() => navigate('/')}>Cine<span>spot</span></p>
            <nav className='header-nav'>
                <NavLink
                    to={'/'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    end
                > <p>Home</p> </NavLink>

                <NavLink
                    to={'/explore'}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    end
                > <p>Movies</p> </NavLink>

                <NavLink
                    to={'/search?find=popular'}
                    className={({ isActive }) => {
                        const searchParams = new URLSearchParams(window.location.search);
                        return isActive && searchParams.get('find') === 'popular' ? 'active' : '';
                    }}
                > <p>Popular</p> </NavLink>

                <NavLink
                    to={'/search?find=upcoming'}
                    className={({ isActive }) => {
                        const searchParams = new URLSearchParams(window.location.search);
                        return isActive && searchParams.get('find') === 'upcoming' ? 'active' : '';
                    }}
                > <p>Upcoming</p> </NavLink>

            </nav>
            <div className="header-buttons">
                <div className="search-container">
                    {showSearch &&
                        <input type="text" name="search" id="search" ref={searchRef}
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
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')} end> <p>Home</p> </NavLink>
                        <NavLink to={'/explore'} className={({ isActive }) => (isActive ? 'active' : '')} end> <p>Movies</p> </NavLink>
                        <NavLink to={'/search?find=popular'} className={({ isActive }) => (isActive ? 'active' : '')} end> <p>Popular</p> </NavLink>
                        <NavLink to={'/search?find=upcoming'} className={({ isActive }) => (isActive ? 'active' : '')} end> <p>Upcoming</p> </NavLink>

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
