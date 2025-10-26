import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 16px;
  max-width: 720px;
  width: 100%;
  padding: 72px 24px;
`;
export const HeroSectionTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: -2.4px;
  text-wrap: balance;
  color: #000;
  text-transform: uppercase;
  text-align: center;
`;
export const HeroSectionDescription = styled.p`
  font-size: 18px;
  line-height: 32px;
  text-wrap: balance;
  color: #000;
  text-align: center;
`;
