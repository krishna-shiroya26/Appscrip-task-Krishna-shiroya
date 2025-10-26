import styled from 'styled-components';

export const SortDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SortButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  &:hover {
    border-color: #D1D5DB;
    background: #F9FAFB;
  }
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
`;

export const SortButtonText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SortButtonIcon = styled.div<{ $isOpen: boolean }>`
  width: 12px;
  height: 12px;
  border-right: 2px solid #6B7280;
  border-bottom: 2px solid #6B7280;
  transform: ${props => props.$isOpen ? 'rotate(225deg)' : 'rotate(45deg)'};
  transition: transform 0.2s ease;
`;

export const SortDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  min-width: 200px;
  overflow: hidden;
`;

export const SortOption = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background: ${props => props.$isSelected ? '#F3F4F6' : 'transparent'};
  
  &:hover {
    background: ${props => props.$isSelected ? '#E5E7EB' : '#F9FAFB'};
  }
  
  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  
  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

export const SortOptionText = styled.span<{ $isSelected: boolean }>`
  font-size: 14px;
  font-weight: ${props => props.$isSelected ? '600' : '400'};
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CheckIcon = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
