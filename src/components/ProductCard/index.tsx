import React from "react";
import { useDispatch } from "react-redux";
import act from "../../redux/actions";
import Product from "../../models/Product";
import S from "./styled";

const ProductCard = (product: Product) => {
  const dispatch = useDispatch();
  const dispatchDecreaseTotal = React.useCallback(
    (total) => dispatch(act.decreaseTotal(total)),
    [dispatch]
  );
  const dispatchEditProduct = React.useCallback(
    (total) => dispatch(act.editProduct(total)),
    [dispatch]
  );
  const dispatchRemoveProduct = React.useCallback(
    (product) => dispatch(act.removeProduct(product)),
    [dispatch]
  );

  const editProduct = () => {
    dispatchDecreaseTotal(product.total);
    dispatchEditProduct(product);
    window.scrollTo(0, 0);
  }

  const removeProduct = () => {
    dispatchDecreaseTotal(product.total);
    dispatchRemoveProduct(product);
  }

  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <S.ProductCardContainer>
      <S.ProductCardBody>
        <S.ProductCardColumn style={{width: '30%'}}>
          <h3>{capitalize(product.name)}</h3>
        </S.ProductCardColumn>
        <S.ProductCardColumn style={{width: '40%'}}>
          <S.ProductCardRow>
            <S.ProductCardColumn>Qtd.</S.ProductCardColumn>
            <S.ProductCardColumn>Preço</S.ProductCardColumn>
            <S.ProductCardColumn>Total</S.ProductCardColumn>
          </S.ProductCardRow>
          <S.ProductCardRow>
            <S.ProductCardColumn>{product.quantity}</S.ProductCardColumn>
            <S.ProductCardColumn>R$ {product.price}</S.ProductCardColumn>
            <S.ProductCardColumn>R$ {product.total}</S.ProductCardColumn>
          </S.ProductCardRow>
        </S.ProductCardColumn>
        <S.ProductCardColumn style={{width: '30%', height: '100%'}}>
          <S.ProductCardRow>
            <S.ProductCardColumn>
              <i className="fa fa-2x fa-pencil" onClick={editProduct}></i>
            </S.ProductCardColumn>
            <S.ProductCardColumn>
              <i className="fa fa-2x fa-trash" onClick={removeProduct}></i>
            </S.ProductCardColumn>
          </S.ProductCardRow>
        </S.ProductCardColumn>
      </S.ProductCardBody>
    </S.ProductCardContainer>
  );
}

export default ProductCard;
