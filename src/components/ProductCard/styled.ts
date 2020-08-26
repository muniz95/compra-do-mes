import styled from "styled-components";

export const ProductCardContainer = styled.div`
  padding: 0 5px 0 5px;
  @media (max-width: 767px) {
    width: 100%
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%
  }
  @media (min-width: 1024px) {
    width: 25%
  }
`;

export const ProductCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductCardBody = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  text-decoration: none;
  color: black;
  border-radius: 34px;
  background: #e4e2e2;
  box-shadow:  5px 5px 5px #c2c0c0, 
              -5px -5px 5px #ffffff;
`;

export const ProductCardColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductCardRow = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
`;

export default {
  ProductCardContainer,
  ProductCardHeader,
  ProductCardBody,
  ProductCardColumn,
  ProductCardRow,
};