import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header' onClick={()=>window.scroll(0,0)}>
            Movies
        </div>
    )
}

export default Header
