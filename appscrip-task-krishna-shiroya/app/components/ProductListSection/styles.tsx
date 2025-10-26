import styled from "styled-components";

export const ProductListWrapper = styled.div<{ $isFilterHidden: boolean }>`
  display: flex;
  background: #F9FAFB;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 40px 24px;
  margin: 0 auto;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  gap: ${props => props.$isFilterHidden ? '0' : '40px'};
  
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 20px 0;
    gap: 0;
  }
`;

export const FilterSidebar = styled.aside`
  width: 320px;
  background: #fff;

  
  @media (max-width: 991px) {
    display: none;
  }
`;

export const MainContent = styled.main<{ $isFilterHidden: boolean }>`
  flex: 1;
  max-width: ${props => props.$isFilterHidden ? '100%' : 'calc(100% - 320px)'};
  width: 100%;
  
  @media (max-width: 991px) {
    padding: 0 24px;
    max-width: 100%;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E5E7EB;
  
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;

export const ItemCount = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.5px;
`;

export const HideFilterLink = styled.a`
  font-size: 14px;
  color: #9CA3AF;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
  
  &:hover {
    color: #6B7280;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PageHeader = styled.div`
  margin-bottom: 40px;
  
  @media (max-width: 991px) {
    margin-bottom: 24px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1F2937;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

export const PageDescription = styled.p`
  font-size: 16px;
  color: #6B7280;
  margin: 0;
  line-height: 1.5;
  
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const MobileFilterButton = styled.button`
  display: none;
  
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 24px;
    background: #374151;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 24px;
    transition: background-color 0.2s;
    
    &:hover {
      background: #1F2937;
    }
  }
`;

export const FilterOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 991px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

export const ProductListSectionContainer = styled.div<{ $isFilterHidden?: boolean }>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  gap: 24px;
  max-width: ${props => props.$isFilterHidden ? '100%' : '932px'};
  width: 100%;
  
  @media (max-width: 1120px) {
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;