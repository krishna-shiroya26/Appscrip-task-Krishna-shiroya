'use client';
import { ProductListSectionContainer } from './styles';
import ProductCard from '../ProductCard/productCard';

const ProductListSection = () => {
    return (
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
    );
};

export default ProductListSection;