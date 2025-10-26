import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  font-family: 'Poppins', sans-serif;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
`;

export const Tag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #000;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 3px;
  z-index: 1;
`;

export const LikeIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #fff;
  border-radius: 50%;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Details = styled.div`
  padding: 10px;
  text-align: left;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #000;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SignInText = styled.div`
  font-size: 12px;
  color: #6a0dad;
  margin-bottom: 0;
  cursor: pointer;
display: flex;
align-items: center;
justify-content: space-between;
gap: 4px;
  a {
    color: #6a0dad;
    text-decoration: underline;
  }
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #374151;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;