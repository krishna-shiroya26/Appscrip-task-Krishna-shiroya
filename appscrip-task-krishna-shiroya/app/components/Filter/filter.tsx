'use client';

import React, { useState } from 'react';
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
  const [filterSections, setFilterSections] = useState<FilterSectionType[]>([
    {
      id: 'customizable',
      title: 'CUSTOMIZABLE',
      subtitle: '',
      options: [
        { id: 'customizable-option', label: 'CUSTOMIZABLE', checked: false }
      ],
      isExpanded: false
    },
    {
      id: 'ideal-for',
      title: 'IDEAL FOR',
      subtitle: 'All',
      options: [
        { id: 'men', label: 'Men', checked: false },
        { id: 'women', label: 'Women', checked: false },
        { id: 'baby-kids', label: 'Baby & Kids', checked: false }
      ],
      isExpanded: true,
      hasUnselectAll: true
    },
    {
      id: 'occasion',
      title: 'OCCASION',
      subtitle: 'All',
      options: [],
      isExpanded: false
    },
    {
      id: 'work',
      title: 'WORK',
      subtitle: 'All',
      options: [],
      isExpanded: false
    },
    {
      id: 'fabric',
      title: 'FABRIC',
      subtitle: 'All',
      options: [],
      isExpanded: false
    },
    {
      id: 'segment',
      title: 'SEGMENT',
      subtitle: 'All',
      options: [],
      isExpanded: false
    },
    {
      id: 'suitable-for',
      title: 'SUITABLE FOR',
      subtitle: 'All',
      options: [],
      isExpanded: false
    },
    {
      id: 'raw-materials',
      title: 'RAW MATERIALS',
      subtitle: 'All',
      options: [],
      isExpanded: false
    },
    {
      id: 'pattern',
      title: 'PATTERN',
      subtitle: 'All',
      options: [],
      isExpanded: false
    }
  ]);

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
