import React from "react";
import { connect } from "react-redux";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import { emptyProducts, emptyTotal } from "./redux/actions";
import Product from "./models/Product";

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
      total: 0,
    };

    this.clean = this.clean.bind(this);
  }

  public clean(): void {
    this.props.dispatchEmptyTotal();
    this.props.dispatchEmptyProducts();
  }

  public render(): JSX.Element {
    const { products, total } = this.props;
    const btnCleanList: JSX.Element = products.length ? (
      <React.Fragment>
        <button onClick={this.clean}>Limpar lista</button>
      </React.Fragment>
    ) : (
      <React.Fragment />
    );
    return (
      <React.Fragment>
        <div>
          <ProductForm />
        </div>
        <div>
          <h3>Total da compra: R$ {total.toFixed(2)}</h3>
          {btnCleanList}
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            maxHeight: "500px",
            overflow: "auto",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return { ...state };
};

const mapDispatchToProps = {
  dispatchEmptyProducts: emptyProducts,
  dispatchEmptyTotal: emptyTotal,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
