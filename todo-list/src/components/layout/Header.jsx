import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header style={headerStyle}>
            <h1>
                TodoList
            </h1>
            <Link style={linkStyle} to='/'>Home</Link> |{' '} 
            <Link style={linkStyle} to='/about'>About</Link>
        </header>
     );
}
 
 const headerStyle ={
     background :'#FFD66B',
     color:'#fff',
     textAlign:'center',
     padding:'10px'
 }

 const  linkStyle ={
     color:'#fff',
    
 }
export default Header;

