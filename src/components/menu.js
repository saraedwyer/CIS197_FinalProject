import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
    <div style={{ 
        background: 'gray',
        paddingTop: '10px'
    }}>

    <ul style ={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
    }}>
        <li> 
            <Link to="/" style={{
            color: 'white',
          }}> Home </Link>
        </li>
        <li> 
            <Link to="/about" style={{
            color: 'white',
          }}> About </Link>
        </li>
    </ul>
    </div>

)

export default Menu;