import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 24px 96px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const HamburgerMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-right: 15px;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  width: 20px;
  height: 2px;
  background: #000;
  border-radius: 1px;
`;

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #374151;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #374151;
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid #374151;
    border-radius: 50%;
  }
`;

export const LogoText = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin: 0;
  letter-spacing: 1px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const LanguageText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 16px;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 16px;
    padding-top: 12px;
  }
`;

export const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: none;
  align-items: center;
  gap: 16px;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const NavLinkGray = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #9CA3AF;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const NavSeparator = styled.div`
  width: 1px;
  height: 16px;
  background: #D1D5DB;
  margin: 0 8px;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #374151;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
