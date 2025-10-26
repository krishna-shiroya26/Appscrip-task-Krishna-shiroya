'use client';
import { useState, useEffect } from 'react';
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
    SortContainer,
    LoadingContainer,
    ErrorMessage,
    LoadingSpinner
} from './styles';
import ProductCard from '../ProductCard/productCard';
import Filter from '../Filter/filter';
import SortDropdown from '../SortDropdown/sortDropdown';
import { 
    fetchProducts, 
    sortProducts, 
    filterProducts, 
    Product 
} from '../../services/api';


const ProductListSection = () => {
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState<any>({});
    const [isFilterHidden, setIsFilterHidden] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentSort, setCurrentSort] = useState('recommended');
    const [wishlistItems, setWishlistItems] = useState<Set<number>>(new Set());

    const handleFilterChange = (filters: any) => {
        setActiveFilters(filters);
    };

    const handleSortChange = (sortValue: string) => {
        setCurrentSort(sortValue);
    };

    const toggleFilterVisibility = () => {
        setIsFilterHidden(!isFilterHidden);
    };

    const toggleWishlist = (productId: number) => {
        setWishlistItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(productId)) {
                newSet.delete(productId);
            } else {
                newSet.add(productId);
            }
            return newSet;
        });
    };

    // Fetch products on component mount
    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts);
                setFilteredProducts(fetchedProducts);
            } catch (err) {
                setError('Failed to load products. Please try again.');
                console.error('Error loading products:', err);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    // Apply filters and sorting when they change
    useEffect(() => {
        let filtered = [...products];
        
        // Apply filters
        if (Object.keys(activeFilters).length > 0) {
            filtered = filterProducts(products, activeFilters);
        }
        
        // Apply sorting
        filtered = sortProducts(filtered, currentSort);
        
        setFilteredProducts(filtered);
    }, [products, activeFilters, currentSort]);

    return (
        <ProductListWrapper $isFilterHidden={isFilterHidden}>
            {!isFilterHidden && (
                <FilterSidebar>
                    <Filter onFilterChange={handleFilterChange} />
                </FilterSidebar>
            )}
            
            <MainContent $isFilterHidden={isFilterHidden}>
                <TopBar>
                    <ItemCount>{filteredProducts.length} ITEMS</ItemCount>
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
                
                {loading ? (
                    <LoadingContainer>
                        <LoadingSpinner />
                        <p>Loading products...</p>
                    </LoadingContainer>
                ) : error ? (
                    <ErrorMessage>
                        <p>{error}</p>
                        <button onClick={() => window.location.reload()}>
                            Try Again
                        </button>
                    </ErrorMessage>
                ) : (
                    <ProductListSectionContainer $isFilterHidden={isFilterHidden}>
                        {filteredProducts.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isTag={index < 3} // First 3 products get "NEW" tag
                                onWishlistToggle={toggleWishlist}
                                isInWishlist={wishlistItems.has(product.id)}
                            />
                        ))}
                    </ProductListSectionContainer>
                )}
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