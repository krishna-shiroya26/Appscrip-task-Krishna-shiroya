"use client";
import Image from "next/image";
import { useState } from 'react';
import {
  Details,
  Icon,
  ImageWrapper,
  ProductCardContainer,
  SignInText,
  Tag,
  Title,
  Price,
  Rating,
  StarIcon
} from "./styles";
import { Product } from '../../services/api';

interface ProductCardProps {
  product: Product;
  isTag?: boolean;
  onWishlistToggle?: (productId: number) => void;
  isInWishlist?: boolean;
}

const ProductCard = ({ 
  product, 
  isTag = false, 
  onWishlistToggle,
  isInWishlist = false 
}: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  const handleWishlistClick = () => {
    if (onWishlistToggle) {
      onWishlistToggle(product.id);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} $filled={true}>★</StarIcon>);
    }
    
    if (hasHalfStar) {
      stars.push(<StarIcon key="half" $filled={true}>★</StarIcon>);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<StarIcon key={`empty-${i}`} $filled={false}>★</StarIcon>);
    }
    
    return stars;
  };

  return (
    <ProductCardContainer>
      <ImageWrapper>
        {isTag && <Tag>NEW PRODUCT</Tag>}
        <Image
          src={imageError ? '/placeholder-product.jpg' : product.image}
          alt={product.title}
          fill
          style={{ objectFit: "cover" }}
          onError={() => setImageError(true)}
        />
      </ImageWrapper>
      <Details>
        <Title>{product.title}</Title>
        
        <Rating>
          <div>{renderStars(product.rating.rate)}</div>
          <span>({product.rating.count})</span>
        </Rating>
        
        <Price>${product.price.toFixed(2)}</Price>
        
        <SignInText>
          <div>
            <a href="#">Sign in</a> or <a href="#">Create an account</a> to see
            pricing
          </div>

          <Icon 
            viewBox="0 0 24 24" 
            onClick={handleWishlistClick}
            $isActive={isInWishlist}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </Icon>
        </SignInText>
      </Details>
    </ProductCardContainer>
  );
};

export default ProductCard;
