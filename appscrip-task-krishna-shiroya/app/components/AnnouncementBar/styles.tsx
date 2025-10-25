import styled from "styled-components";

export const MainBlock = styled.div`
  background-color: #000;
  padding: 8px;
  display: flex;
  justify-content: space-around ;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    margin: 0;
    color: #eb4c6b;
    font-size: 14px;
    font-weight: 400;
  }
    @media (max-width: 767px) {
        &.second-item {
            display: none;
        }
        &.third-item {
            display: none;
        }
    }
`;
