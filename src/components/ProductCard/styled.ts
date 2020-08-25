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
  border-style: solid;
  border-width: 1px;
  border-radius: 25px;
  border-color: #DC0A2D;
  text-decoration: none;
  color: black;
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