import React, { useState } from 'react';

const Search = props => {

    const [searching, setsearching] = useState('')

    const search = () => {
        console.log(searching,"Sea")
        props.search({ searching })
    }

    return (
        <div>
            <div className="search">
                <input type="text1" onChange={(e) => setsearching(e.target.value)} id="fname" name="fname" placeholder="ค้นหา..." size="50"></input>
                <button type="search" onClick={search} className="btn btn-outline-warning"><svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" />
                    <path d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
                </svg></button>
            </div>
        </div>

    )
}

export default Search;