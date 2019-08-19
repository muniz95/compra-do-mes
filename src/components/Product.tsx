import React from 'react';
import { connect } from 'react-redux';
import { decreaseTotal, editProduct, increaseTotal, removeProduct } from '../redux/actions';

interface IProps {
  quantity: number;
  price: number;
  dispatchDecreaseTotal: (total: number) => {};
  dispatchEditProduct: (product: any) => {};
  dispatchRemoveProduct: (product: any) => {};
}
interface IState {
  product: any;
}

class Product extends React.Component<IProps, IState> {
  public state: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      product: {...props}
    };

    this.removeProduct = this.removeProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  public componentWillReceiveProps(props: IProps) {
    const { quantity, price } = props;
    const total = (quantity * price).toFixed(2);
    this.setState({
      product: {
        ...props,
        total
      }
    });
  }

  public editProduct() {
    const { product } = this.state;
    this.props.dispatchDecreaseTotal(product.total);
    this.props.dispatchEditProduct(product);
    window.scrollTo(0, 0);
  }

  public removeProduct() {
    const { product } = this.state;
    this.props.dispatchDecreaseTotal(product.total);
    this.props.dispatchRemoveProduct(product);
  }

  public render(): JSX.Element {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.state.product.name}</h4>
            <div className="row">
              <div className="col"><b>Qtd.</b></div>
              <div className="col"><b>Preço</b></div>
              <div className="col"><b>Preço total</b></div>
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

export default connect(null, mapDispatchToProps)(Product);
