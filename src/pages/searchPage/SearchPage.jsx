import React, { useEffect } from 'react'

import { MovieLists2 } from '../../containers'
import { useParams } from 'react-router-dom'

const SearchPage = (props) => {

    const params = useParams();
    const query = params.query;

    useEffect(()=>{
        console.log(query);
    });

    return (
        <div className='searchPage margin-tb'>
            <MovieLists2 text={query} />
        </div>
    )
}

export default SearchPage