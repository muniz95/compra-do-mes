import React from "react";
import { connect } from "react-redux";
import { decreaseTotal, editProduct, increaseTotal, removeProduct } from "../redux/actions";
import Product from "../models/Product";

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

  public render(): JSX.Element {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.product.name}</h4>
            <div className="row">
              <div className="col"><b>Qtd.</b></div>
              <div className="col"><b>Preço</b></div>
              <div className="col"><b>Preço total</b></div>
            </div>
            <div className="row">
              <div className="col">{this.props.product.quantity}</div>
              <div className="col">R$ {this.props.product.price}</div>
              <div className="col">R$ {this.props.product.total}</div>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <div className="col text-center">
                <i className="fa fa-2x fa-pencil" onClick={this.editProduct}></i>
              </div>
              <div className="col text-center">
                <i className="fa fa-2x fa-trash" onClick={this.removeProduct}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchDecreaseTotal: decreaseTotal,
  dispatchEditProduct: editProduct,
  dispatchIncreaseTotal: increaseTotal,
  dispatchRemoveProduct: removeProduct
};

export default connect(null, mapDispatchToProps)(ProductComponent);
