import styled from "styled-components";

export const ProductListWrapper = styled.div`
  display: flex;
  background: #F9FAFB;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  padding: 40px 24px;
  margin: 0 auto;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
gap: 40px;
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 20px 0;
  }
`;

export const FilterSidebar = styled.aside`
  width: 320px;
  background: #fff;

  
  @media (max-width: 991px) {
    display: none;
  }
`;

export const MainContent = styled.main`
@media (max-width: 991px){
    padding: 0 24px;
}
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

export const ProductListSectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  gap: 24px;
  max-width: 932px;
  width: 100%;
  @media (max-width: 1120px){
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));

  }
`;