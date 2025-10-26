import styled from 'styled-components';

export const FilterContainer = styled.div`
  background: #fff;
  padding: 24px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  min-width: 280px;
  max-width: 320px;
  border-radius: 8px;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E5E7EB;
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
  
  &:hover {
    color: #6B7280;
  }
`;

export const FilterSection = styled.div`
  margin-bottom: 8px;
`;

export const FilterSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #F9FAFB;
    margin: 0 -12px;
    padding: 12px;
    border-radius: 4px;
  }
`;

export const FilterSectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const FilterSectionSubtitle = styled.p`
  font-size: 12px;
  color: #9CA3AF;
  margin: 2px 0 0 0;
  font-weight: 400;
`;

export const ChevronIcon = styled.div<{ $isExpanded: boolean }>`
  width: 12px;
  height: 12px;
  border-right: 2px solid #9CA3AF;
  border-bottom: 2px solid #9CA3AF;
  transform: ${props => props.$isExpanded ? 'rotate(225deg)' : 'rotate(45deg)'};
  transition: transform 0.2s ease;
`;

export const UnselectAllLink = styled.a`
  display: block;
  font-size: 12px;
  color: #9CA3AF;
  text-decoration: none;
  margin: 8px 0 12px 0;
  transition: color 0.2s;
  
  &:hover {
    color: #6B7280;
  }
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #374151;
  cursor: pointer;
  
  &:focus {
    outline: 2px solid #3B82F6;
    outline-offset: 2px;
  }
`;

export const OptionLabel = styled.label`
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  user-select: none;
  transition: color 0.2s;
  
  &:hover {
    color: #1F2937;
  }
`;

export const SectionDivider = styled.hr`
  border: none;
  height: 1px;
  background: #E5E7EB;
  margin: 16px 0;
`;

// Additional styles for responsive design
export const FilterWrapper = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 1000;
    transition: left 0.3s ease;
    overflow-y: auto;
    
    &.open {
      left: 0;
    }
  }
`;

export const MobileFilterHeader = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid #E5E7EB;
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 1001;
  }
`;

export const MobileFilterTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #374151;
  margin: 0;
`;

export const CloseButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background: #F3F4F6;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
      background: #E5E7EB;
    }
    
    &::before {
      content: '×';
      font-size: 20px;
      color: #6B7280;
    }
  }
`;
