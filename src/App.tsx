import React from "react";
import { connect } from "react-redux";
import ProductComponent from "./components/ProductComponent";
import ProductForm from "./components/ProductForm";
import { emptyProducts, emptyTotal } from "./redux/actions";
import Product from "./models/Product";
import "./App.scss";

interface IProps {
  dispatchEmptyProducts: () => void;
  dispatchEmptyTotal: () => void;
  products: Product[];
  total: number;
}
interface IState {
  products: any[];
  total: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      products: [],
      total: 0
    };
  }

  clean = (): void => {
    this.props.dispatchEmptyTotal();
    this.props.dispatchEmptyProducts();
  }

  public render(): JSX.Element {
    const { products } = this.props;
    const btnCleanList: JSX.Element = products.length
      ? <div className="clear-cart-container">
          <button className="clear-cart-button" onClick={this.clean}>Limpar lista</button>
        </div>
      : <React.Fragment />;
    return (
      <React.Fragment>
        <div className="product-form-container">
          <ProductForm />
        </div>
        <div className="total-cart">
          <div className="total-cart-label">
            <strong>Total da compra: R$ {this.props.total.toFixed(2)}</strong>
          </div>
          { btnCleanList }
        </div>
        <div className="products-container">
          <div className="product-list-container">
            { products.map((product: any) =>
                <ProductComponent key={product.id} product={product} />
            ) }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IState) => {
  const { products, total } = state;
  return {
    products,
    total
  };
};

const mapDispatchToProps = {
  dispatchEmptyProducts: emptyProducts,
  dispatchEmptyTotal: emptyTotal
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
