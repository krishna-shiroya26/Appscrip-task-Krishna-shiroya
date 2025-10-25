"use client";
import Image from "next/image";
import {
  Details,
  Icon,
  ImageWrapper,
  ProductCardContainer,
  SignInText,
  Tag,
  Title,
} from "./styles";
import ProductImage from '../../assets/images/bag.png';

const ProductCard = ({ isTag = false }: { isTag?: boolean }) => {
  return (
    <ProductCardContainer>
      <ImageWrapper>
        {isTag && <Tag>NEW PRODUCT</Tag>}
        <Image
          src={ProductImage} // replace with your image path
          alt="Product"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>
      <Details>
        <Title>PPXOC MILKYWAY DRESS IN...</Title>
        <SignInText>
          <div>
            <a href="#">Sign in</a> or <a href="#">Create an account</a> to see
            pricing
          </div>

          <Icon viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </Icon>
        </SignInText>
      </Details>
    </ProductCardContainer>
  );
};

export default ProductCard;
