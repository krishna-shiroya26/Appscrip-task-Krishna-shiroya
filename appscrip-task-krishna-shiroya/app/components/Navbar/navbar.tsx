'use client';
import React from 'react';
import {
  NavbarContainer,
  TopRow,
  LogoSection,
  HamburgerMenu,
  HamburgerLine,
  LogoIcon,
  LogoText,
  RightSection,
  IconButton,
  BottomRow,
  DesktopNav,
  MobileNav,
  NavLink,
  NavLinkGray,
  NavSeparator,
  Icon
} from './styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <TopRow>
        <LogoSection>
          <HamburgerMenu>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </HamburgerMenu>
          <LogoIcon />
          <LogoText>LOGO</LogoText>
        </LogoSection>
        
        <RightSection>
          <IconButton>
            <Icon viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </Icon>
          </IconButton>
          
          <IconButton>
            <Icon viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </Icon>
          </IconButton>
          
          <IconButton>
            <Icon viewBox="0 0 24 24">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" />
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" />
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" />
            </Icon>
          </IconButton>
        </RightSection>
      </TopRow>
      
      <BottomRow>
        <DesktopNav>
          <NavLink href="#shop">SHOP</NavLink>
          <NavLink href="#skills">SKILLS</NavLink>
          <NavLink href="#stories">STORIES</NavLink>
          <NavLink href="#about">ABOUT</NavLink>
          <NavLink href="#contact">CONTACT US</NavLink>
        </DesktopNav>
        
        <MobileNav>
          <NavLinkGray href="#home">HOME</NavLinkGray>
          <NavSeparator />
          <NavLink href="#shop">SHOP</NavLink>
        </MobileNav>
      </BottomRow>
    </NavbarContainer>
  );
};

export default Navbar;
