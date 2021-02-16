import React from 'react'
import SearchIcon from '../../../../../assets/images/search_icon.png'

function Search() {
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <form className="search">
                <input className="form-control" type="text" placeholder="Search" />
                <button><img src={SearchIcon} alt='search icons' /></button>
            </form>
        </div>
    )
}

export default Search
