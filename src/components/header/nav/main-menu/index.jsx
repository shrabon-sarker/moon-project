import React from 'react'
import MenuItems from './menu-Item'
import Search from './menu-search/Search'

function MainMenu() {
    return (
        <div className="row">
            <div className="col-md-12 location_icon_bottum">
                <div className="row">
                    <MenuItems />
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default MainMenu
