import styled from 'styled-components';

export const NavBarSection = styled.section `
    position: absolute;
    top: 0px;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #171717;
`;

export const NavBarImg = styled.img `
    float: left;
    position: relative;    
`;

export const NavBarLink = styled.a `
    color: #fff;
    display: inline-block;
    font-family: 'Nitti v500', Arial, sans-serif;
    margin-top: 5px;
    margin-right: 10px;
    margin-left: 10px;
    max-width: 1000px;
    padding: 0px;    
    position: relative;
    text-align: left;
    text-decoration: none;    
    vertical-align: top;    
`;

export const NavBarMenu = styled.nav `
    position: relative;
    float: right;
`;