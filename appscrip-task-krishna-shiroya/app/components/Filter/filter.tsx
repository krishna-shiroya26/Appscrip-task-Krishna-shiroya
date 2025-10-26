'use client';

import React, { useState, useEffect } from 'react';
import {
  FilterContainer,
  FilterHeader,
  ItemCount,
  HideFilterLink,
  FilterSection,
  FilterSectionHeader,
  FilterSectionTitle,
  FilterSectionSubtitle,
  ChevronIcon,
  UnselectAllLink,
  FilterOptions,
  FilterOption,
  Checkbox,
  OptionLabel,
  SectionDivider,
  FilterWrapper,
  MobileFilterHeader,
  MobileFilterTitle,
  CloseButton
} from './styles';
import { fetchCategories } from '../../services/api';

interface FilterOptionType {
  id: string;
  label: string;
  checked: boolean;
}

interface FilterSectionType {
  id: string;
  title: string;
  subtitle: string;
  options: FilterOptionType[];
  isExpanded: boolean;
  hasUnselectAll?: boolean;
}

interface FilterProps {
  isMobileOpen?: boolean;
  onClose?: () => void;
  onFilterChange?: (filters: any) => void;
}

const Filter: React.FC<FilterProps> = ({ 
  isMobileOpen = false, 
  onClose, 
  onFilterChange 
}) => {
  const [filterSections, setFilterSections] = useState<FilterSectionType[]>([]);
  const [loading, setLoading] = useState(true);

  // Load categories from API
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categories = await fetchCategories();
        const categoryOptions = categories.map(category => ({
          id: category.toLowerCase(),
          label: category.charAt(0).toUpperCase() + category.slice(1),
          checked: false
        }));

        setFilterSections([
          {
            id: 'category',
            title: 'CATEGORY',
            subtitle: 'All',
            options: categoryOptions,
            isExpanded: true,
            hasUnselectAll: true
          }
        ]);
      } catch (error) {
        console.error('Error loading categories:', error);
        // Fallback to default categories
        setFilterSections([
          {
            id: 'category',
            title: 'CATEGORY',
            subtitle: 'All',
            options: [
              { id: 'electronics', label: 'Electronics', checked: false },
              { id: 'jewelery', label: 'Jewelery', checked: false },
              { id: 'mens-clothing', label: 'Men\'s Clothing', checked: false },
              { id: 'womens-clothing', label: 'Women\'s Clothing', checked: false }
            ],
            isExpanded: true,
            hasUnselectAll: true
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  const toggleSection = (sectionId: string) => {
    setFilterSections(prev => 
      prev.map(section => 
        section.id === sectionId 
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  const toggleOption = (sectionId: string, optionId: string) => {
    setFilterSections(prev => 
      prev.map(section => 
        section.id === sectionId 
          ? {
              ...section,
              options: section.options.map(option =>
                option.id === optionId 
                  ? { ...option, checked: !option.checked }
                  : option
              )
            }
          : section
      )
    );
  };

  const unselectAll = (sectionId: string) => {
    setFilterSections(prev => 
      prev.map(section => 
        section.id === sectionId 
          ? {
              ...section,
              options: section.options.map(option => ({ ...option, checked: false }))
            }
          : section
      )
    );
  };

  const getActiveFilters = () => {
    const activeFilters: any = {};
    filterSections.forEach(section => {
      const checkedOptions = section.options.filter(option => option.checked);
      if (checkedOptions.length > 0) {
        activeFilters[section.id] = checkedOptions.map(option => option.id);
      }
    });
    return activeFilters;
  };

  const handleFilterChange = () => {
    if (onFilterChange) {
      onFilterChange(getActiveFilters());
    }
  };

  React.useEffect(() => {
    handleFilterChange();
  }, [filterSections]);

  return (
    <FilterWrapper className={isMobileOpen ? 'open' : ''}>
      <MobileFilterHeader>
        <MobileFilterTitle>Filters</MobileFilterTitle>
        <CloseButton onClick={onClose} />
      </MobileFilterHeader>
      
      <FilterContainer>


      {filterSections.map((section, index) => (
        <React.Fragment key={section.id}>
          <FilterSection>
            <FilterSectionHeader onClick={() => toggleSection(section.id)}>
              <div>
                <FilterSectionTitle>{section.title}</FilterSectionTitle>
                {section.subtitle && (
                  <FilterSectionSubtitle>{section.subtitle}</FilterSectionSubtitle>
                )}
              </div>
              <ChevronIcon $isExpanded={section.isExpanded} />
            </FilterSectionHeader>

            {section.isExpanded && section.options.length > 0 && (
              <>
                {section.hasUnselectAll && (
                  <UnselectAllLink 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      unselectAll(section.id);
                    }}
                  >
                    Unselect all
                  </UnselectAllLink>
                )}
                
                <FilterOptions>
                  {section.options.map((option) => (
                    <FilterOption key={option.id}>
                      <Checkbox
                        type="checkbox"
                        id={`${section.id}-${option.id}`}
                        checked={option.checked}
                        onChange={() => toggleOption(section.id, option.id)}
                      />
                      <OptionLabel htmlFor={`${section.id}-${option.id}`}>
                        {option.label}
                      </OptionLabel>
                    </FilterOption>
                  ))}
                </FilterOptions>
              </>
            )}
          </FilterSection>

          {index < filterSections.length - 1 && <SectionDivider />}
        </React.Fragment>
      ))}
      </FilterContainer>
    </FilterWrapper>
  );
};

export default Filter;
