import React from 'react'
import MainMenu from './nav/main-menu'
import SubMenu from './nav/sub-menu'

function Header() {
    return (
        <header>
            {/* header inner */}
            <div className="header">
                <div className="container">
                    <SubMenu />
                    <MainMenu />
                </div>
            </div>
        </header>
    )
}

export default Header
