import React from "react";
import { connect } from "react-redux";
import ProductComponent from "./components/ProductComponent";
import ProductForm from "./components/ProductForm";
import { emptyProducts, emptyTotal } from "./redux/actions";
import Product from "./models/Product";
// import './App.css'

interface IProps {
  dispatchEmptyProducts: () => void;
  dispatchEmptyTotal: () => void;
  products: Product[];
  total: number;
}

interface IState {
  products: Product[];
  total: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      products: [],
      total: 0
    };

    this.clean = this.clean.bind(this);
  }

  public clean(): void {
    this.props.dispatchEmptyTotal();
    this.props.dispatchEmptyProducts();
  }

  public render(): JSX.Element {
    const { products, total } = this.props;
    const btnCleanList: JSX.Element = products.length
      ? <React.Fragment>
          <div>
            <div>
              <button onClick={this.clean}>Limpar lista</button>
            </div>
          </div>
        </React.Fragment>
      : <React.Fragment />;
    return (
      <React.Fragment>
        <div>
          <div>
            <ProductForm />
          </div>
        </div>
        <div>&nbsp;</div>
        <div>
          <div>
            <h3>Total da compra: R$ {total.toFixed(2)}</h3>
          </div>
        </div>
        <div>&nbsp;</div>
        <div>
          { products.map((product: any) =>
              <ProductComponent key={product.id} product={product} />
          ) }
        </div>
        { btnCleanList }
        <div>&nbsp;</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {...state};
};

const mapDispatchToProps = {
  dispatchEmptyProducts: emptyProducts,
  dispatchEmptyTotal: emptyTotal
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
