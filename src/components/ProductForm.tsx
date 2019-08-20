import React from "react";
import { connect } from "react-redux";
import { decreaseTotal, increaseTotal, saveProduct, updateProduct } from "../redux/actions";
import Product from "../models/Product";

interface IProps {
  dispatchSaveProduct: (product: Product) => void;
  dispatchUpdateProduct: (product: Product) => void;
  dispatchIncreaseTotal: (value: any) => void;
  dispatchDecreaseTotal: (value: any) => void;
  product: Product;
}

interface IState {
  id: number;
  name: string;
  price: number;
  product: Product;
  products: Product[];
  quantity: number;
}

class ProductForm extends React.Component<IProps, IState> {
  public state: IState = {
    id: 0,
    name: "",
    price: 0,
    product: new Product(),
    products: [],
    quantity: 0
  };

  constructor(props: IProps) {
    super(props);

    this.save = this.save.bind(this);
  }

  public save(): void {
    const product = {
      id: 0,
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      total: "0"
    }
    // const { product } = this.state;
    const { quantity, price } = product;
    product.total = (quantity * price).toFixed(2);
    if (!product.id) {
      product.id = Date.now();
      this.props.dispatchSaveProduct(product);
    } else {
      this.props.dispatchUpdateProduct(product);
    }
    this.props.dispatchIncreaseTotal(product.total);

    this.cleanForm();
  }

  public cleanForm(): void {
    this.setState({
      id: 0,
      name: "",
      price: 0,
      quantity: 0
    });
  }

  public render(): JSX.Element {
    return (
      <form>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label>Produto</label>
              <input
                onChange={(event) => this.setState({name: event.target.value})}
                type="text"
                className="form-control"
                id="name"
                placeholder="Arroz, feijão, ..."
                value={this.state.name}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="form-group">
              <label>Quantidade</label>
              <input
                onChange={(event) => this.setState({quantity: Number.parseFloat(event.target.value)})}
                type="number"
                className="form-control"
                id="quantity"
                placeholder="Quantidade"
                value={this.state.quantity}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="form-group">
              <label>Preço</label>
              <input
                onChange={(event) => this.setState({price: Number.parseFloat(event.target.value)})}
                type="number"
                className="form-control"
                id="price"
                placeholder="Preço unitário"
                value={this.state.price}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <button type="button" onClick={this.save} className="btn btn-default">Salvar</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state: IState) => {
  const { products, product } = state;
  return {
    product,
    products
  };
};

const mapDispatchToProps = {
  dispatchDecreaseTotal: decreaseTotal,
  dispatchIncreaseTotal: increaseTotal,
  dispatchSaveProduct: saveProduct,
  dispatchUpdateProduct: updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
