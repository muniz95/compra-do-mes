import React from "react";
import { connect } from "react-redux";
import act from "../../redux/actions";
import Product from "../../models/Product";
import S from "./styled";

interface IProps {
  product: Product;
  dispatchDecreaseTotal: (total: number) => {};
  dispatchEditProduct: (product: Product) => {};
  dispatchRemoveProduct: (product: Product) => {};
}

class ProductComponent extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    this.removeProduct = this.removeProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.capitalize = this.capitalize.bind(this);
  }

  public editProduct(): void {
    const { product } = this.props;
    this.props.dispatchDecreaseTotal(product.total);
    this.props.dispatchEditProduct(product);
    window.scrollTo(0, 0);
  }

  public removeProduct(): void {
    const { product } = this.props;
    this.props.dispatchDecreaseTotal(product.total);
    this.props.dispatchRemoveProduct(product);
  }

  public capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  public render(): JSX.Element {
    return (
      <S.ProductCardContainer>
        <S.ProductCardBody>
          <S.ProductCardColumn>
            <h2>{this.capitalize(this.props.product.name)}</h2>
          </S.ProductCardColumn>
          <S.ProductCardColumn>
            <S.ProductCardRow>
              <S.ProductCardColumn>Qtd.</S.ProductCardColumn>
              <S.ProductCardColumn>Preço</S.ProductCardColumn>
              <S.ProductCardColumn>Total</S.ProductCardColumn>
            </S.ProductCardRow>
          </S.ProductCardColumn>
        </S.ProductCardBody>
      </S.ProductCardContainer>
      // <div>
      //   <div className="card-block">
      //     <h4 className="card-title">{this.props.product.name}</h4>
      //     <div className="row">
      //       <div className="col"><b>Qtd.</b></div>
      //       <div className="col"><b>Preço</b></div>
      //       <div className="col"><b>Preço total</b></div>
      //     </div>
      //     <div className="row">
      //       <div className="col">{this.props.product.quantity}</div>
      //       <div className="col">R$ {this.props.product.price}</div>
      //       <div className="col">R$ {this.props.product.total}</div>
      //     </div>
      //     <div className="row">&nbsp;</div>
      //     <div className="row">
      //       <div className="col text-center">
      //         <i className="fa fa-2x fa-pencil" onClick={this.editProduct}></i>
      //       </div>
      //       <div className="col text-center">
      //         <i className="fa fa-2x fa-trash" onClick={this.removeProduct}></i>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchDecreaseTotal: act.decreaseTotal,
  dispatchEditProduct: act.editProduct,
  dispatchIncreaseTotal: act.increaseTotal,
  dispatchRemoveProduct: act.removeProduct,
};

export default connect(null, mapDispatchToProps)(ProductComponent);
