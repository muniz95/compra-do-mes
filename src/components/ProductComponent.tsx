import React from "react";
import { connect } from "react-redux";
import { decreaseTotal, editProduct, increaseTotal, removeProduct } from "../redux/actions";
import Product from "../models/Product";
import "./ProductComponent.scss";

interface IProps {
  product: Product;
  dispatchDecreaseTotal: (total: number) => {};
  dispatchEditProduct: (product: Product) => {};
  dispatchRemoveProduct: (product: Product) => {};
}
interface IState {
  product: Product;
}

class ProductComponent extends React.Component<IProps, IState> {
  public state: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      product: props.product
    };
  }

  public componentDidUpdate(props: IProps): void {
    const { quantity, price } = props.product;
    const total: string = (quantity * price).toFixed(2);
    this.setState({product: {...props.product, total}});
  }

  editProduct = (): void => {
    const { product } = this.state;
    this.props.dispatchDecreaseTotal(product.total);
    this.props.dispatchEditProduct(product);
    window.scrollTo(0, 0);
  }

  removeProduct = (): void => {
    const { product } = this.state;
    this.props.dispatchDecreaseTotal(product.total);
    this.props.dispatchRemoveProduct(product);
  }

  public render(): JSX.Element {
    return (
      <div className="card-container">
        <div className="card-block">
          <h4 className="card-title">{this.state.product.name}</h4>
          <div className="row">
            <div className="col"><b>Qtd.</b></div>
            <div className="col"><b>Preço</b></div>
            <div className="col"><b>Total</b></div>
          </div>
          <div className="row">
            <div className="col">{this.state.product.quantity}</div>
            <div className="col">R$ {this.state.product.price}</div>
            <div className="col">R$ {this.state.product.total}</div>
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
