import React from 'react'

import {Link} from 'react-router-dom'

const NavMain = () => {
    return (
        <div className = "navMain">
            <Link to= "/"><span>&#127968;</span> Home</Link>
        </div>
    )
}

export default NavMain
