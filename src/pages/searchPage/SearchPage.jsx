import React from 'react'

import { MovieLists2 } from '../../containers'

const SearchPage = (props) => {
    const title = props.title ? props.title : 'Search Results'
    return (
        <div className='searchPage margin-tb'>
            <MovieLists2 text={title} />
        </div>
    )
}

export default SearchPage