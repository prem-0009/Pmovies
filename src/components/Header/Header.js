import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header' onClick={()=>window.scroll(0,0)}>
            Movies  &  TVs
        </div>
    )
}

export default Header
