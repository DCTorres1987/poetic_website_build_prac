import React from 'react';

import { 
    NavBarSection,
    NavBarImg,
    NavBarLink,
    NavBarMenu,
    NavBarContainer
} from '../styled/navbarStyled'

const Navbar = () => {

    const links = ['Work', 'Services', 'Company', 'News', 'Contact']

    return (

         <NavBarSection>
             <NavBarContainer>
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
            </NavBarContainer>
         </NavBarSection>

    )


   



}

export default Navbar;