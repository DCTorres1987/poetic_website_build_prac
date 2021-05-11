import React from 'react';

import { 
    NavBarSection,
    NavBarImg,
    NavBarLink,
    NavBarMenu
} from '../styled/navbarStyled'

const Navbar = () => {

    const links = ['Work', 'Services', 'Company', 'News', 'Contact']

    return (

         <NavBarSection>
            <NavBarImg 
                src='./images/poetic-logo.PNG' 
                alt='poetic-logo'/>
            <ul>
            {links.map((value, idx) => (
                <NavBarMenu key={Math.random().toString(36).substr(2, 9)}>
                
                <NavBarLink href={'https://poetic.io/' + value} class='nav-link w-nav-link'>{value}</NavBarLink>
                </NavBarMenu>

            ))}
            </ul>
         </NavBarSection>

    )


   



}

export default Navbar;