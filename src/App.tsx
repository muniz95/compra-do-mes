import React from "react";
import { connect } from "react-redux";
import Product from "./components/ProductComponent";
import ProductForm from "./components/ProductForm";
import { emptyProducts, emptyTotal } from "./redux/actions";
// import './App.css'

interface IProps {
  dispatchEmptyProducts: () => void;
  dispatchEmptyTotal: () => void;
  products: any[];
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
    window.console.log("foi");

    this.clean = this.clean.bind(this);
  }

  public clean(): void {
    this.props.dispatchEmptyTotal();
    this.props.dispatchEmptyProducts();
  }

  public render(): JSX.Element {
    const { products } = this.props;
    const btnCleanList: JSX.Element = products.length
      ? <React.Fragment>
          <div className="row">&nbsp;</div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <button className="btn btn-danger" onClick={this.clean}>Limpar lista</button>
            </div>
          </div>
        </React.Fragment>
      : <React.Fragment />;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ProductForm />
          </div>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3>Total da compra: R$ {this.state.total.toFixed(2)}</h3>
          </div>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          { products.map((product: any) =>
              <Product key={product.id} product={product} />
          ) }
        </div>
        { btnCleanList }
        <div className="row">&nbsp;</div>
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
