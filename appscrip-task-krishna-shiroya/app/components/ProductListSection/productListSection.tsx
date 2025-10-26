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
    PageDescription
} from './styles';
import ProductCard from '../ProductCard/productCard';
import Filter from '../Filter/filter';


const ProductListSection = () => {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState<any>({});

    const handleFilterChange = (filters: any) => {
        setActiveFilters(filters);
        console.log('Active filters:', filters);
    };

    return (
        <ProductListWrapper>
            <FilterSidebar>
                <Filter onFilterChange={handleFilterChange} />
            </FilterSidebar>
            
            <MainContent>
             

                <MobileFilterButton onClick={() => setIsMobileFilterOpen(true)}>
                    Show Filters
                </MobileFilterButton>
                
                <ProductListSectionContainer>
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