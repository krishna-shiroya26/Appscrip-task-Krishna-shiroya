'use client';
import { useState } from 'react';
import { 
    ProductListSectionContainer, 
    ProductListWrapper, 
    FilterSidebar, 
    MainContent, 
    MobileFilterButton, 
    FilterOverlay,
    PageHeader,
    PageTitle,
    PageDescription,
    TopBar,
    ItemCount,
    HideFilterLink,
    SortContainer
} from './styles';
import ProductCard from '../ProductCard/productCard';
import Filter from '../Filter/filter';
import SortDropdown from '../SortDropdown/sortDropdown';


const ProductListSection = () => {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState<any>({});
    const [isFilterHidden, setIsFilterHidden] = useState(false);

    const handleFilterChange = (filters: any) => {
        setActiveFilters(filters);
    };

    const handleSortChange = (sortValue: string) => {
        console.log('Sort changed to:', sortValue);
    };

    const toggleFilterVisibility = () => {
        setIsFilterHidden(!isFilterHidden);
    };

    return (
        <ProductListWrapper $isFilterHidden={isFilterHidden}>
            {!isFilterHidden && (
                <FilterSidebar>
                    <Filter onFilterChange={handleFilterChange} />
                </FilterSidebar>
            )}
            
            <MainContent $isFilterHidden={isFilterHidden}>
                <TopBar>
                    <ItemCount>3425 ITEMS</ItemCount>
                    <HideFilterLink 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            toggleFilterVisibility();
                        }}
                    >
                        {isFilterHidden ? '< SHOW FILTER' : '< HIDE FILTER'}
                    </HideFilterLink>
                    <SortContainer>
                        <SortDropdown onSortChange={handleSortChange} />
                    </SortContainer>
                </TopBar>

                <MobileFilterButton onClick={() => setIsMobileFilterOpen(true)}>
                    Show Filters
                </MobileFilterButton>
                
                <ProductListSectionContainer $isFilterHidden={isFilterHidden}>
                    <ProductCard isTag={true} />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductListSectionContainer>
            </MainContent>

            <FilterOverlay 
                $isOpen={isMobileFilterOpen} 
                onClick={() => setIsMobileFilterOpen(false)}
            />
            
            {isMobileFilterOpen && (
                <Filter 
                    isMobileOpen={true} 
                    onClose={() => setIsMobileFilterOpen(false)}
                    onFilterChange={handleFilterChange}
                />
            )}
        </ProductListWrapper>
    );
};

export default ProductListSection;