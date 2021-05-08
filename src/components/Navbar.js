import React from 'react';

import { 
    NavBarSection
} from '../styled/navbarStyled'

const Navbar = () => {

    const links = ['Work', 'Services', 'Company', 'News', 'Contact']

    return (

         <NavBarSection>
            <img src='./images/poetic-logo.PNG' alt='poetic-logo'/>
            <ul>
            {links.map((value, idx) => (
                <navbar key={Math.random().toString(36).substr(2, 9)}>{value}</navbar>

            ))}
            </ul>
         </NavBarSection>

    )


   



}

export default Navbar;