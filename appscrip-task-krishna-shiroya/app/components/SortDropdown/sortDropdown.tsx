'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  SortDropdownContainer,
  SortButton,
  SortButtonText,
  SortButtonIcon,
  SortDropdownMenu,
  SortOption,
  SortOptionText,
  CheckIcon
} from './styles';

interface SortOption {
  id: string;
  label: string;
  value: string;
}

interface SortDropdownProps {
  onSortChange?: (sortValue: string) => void;
  className?: string;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ 
  onSortChange, 
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('recommended');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortOptions: SortOption[] = [
    { id: 'recommended', label: 'RECOMMENDED', value: 'recommended' },
    { id: 'newest', label: 'NEWEST FIRST', value: 'newest' },
    { id: 'popular', label: 'POPULAR', value: 'popular' },
    { id: 'price-high-low', label: 'PRICE : HIGH TO LOW', value: 'price-high-low' },
    { id: 'price-low-high', label: 'PRICE : LOW TO HIGH', value: 'price-low-high' }
  ];

  const selectedOption = sortOptions.find(option => option.id === selectedSort);

  const handleSortChange = (option: SortOption) => {
    setSelectedSort(option.id);
    setIsOpen(false);
    if (onSortChange) {
      onSortChange(option.value);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SortDropdownContainer ref={dropdownRef} className={className}>
      <SortButton onClick={toggleDropdown} $isOpen={isOpen}>
        <SortButtonText>{selectedOption?.label}</SortButtonText>
        <SortButtonIcon $isOpen={isOpen} />
      </SortButton>

      {isOpen && (
        <SortDropdownMenu>
          {sortOptions.map((option) => (
            <SortOption
              key={option.id}
              onClick={() => handleSortChange(option)}
              $isSelected={option.id === selectedSort}
            >
              {option.id === selectedSort && <CheckIcon>✓</CheckIcon>}
              <SortOptionText $isSelected={option.id === selectedSort}>
                {option.label}
              </SortOptionText>
            </SortOption>
          ))}
        </SortDropdownMenu>
      )}
    </SortDropdownContainer>
  );
};

export default SortDropdown;
