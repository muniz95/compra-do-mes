import { Component } from 'inferno';
import { connect } from 'inferno-redux';
import Product from './components/Product';
import ProductForm from './components/ProductForm';
import { emptyProducts, emptyTotal } from './redux/actions';
// import './App.css'

interface IProps {
  dispatchEmptyProducts: () => {} | null;
  dispatchEmptyTotal: () => {} | null;
  products: object[];
  total: string;
}
interface IState {
  products: object[] | null;
}

class App extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
    window.console.log('foi');

    this.clean = this.clean.bind(this);
  }

  public clean() {
    this.props.dispatchEmptyTotal();
    this.props.dispatchEmptyProducts();
  }

  public render() {
    const { products } = this.props;
    const btnCleanList = products.length
      ? [
        <div className="row">&nbsp;</div>,
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <button className="btn btn-danger" onClick={this.clean}>Limpar lista</button>
          </div>
        </div>
        ]
      :
        null;
    return ([
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ProductForm />
        </div>
      </div>,
      <div className="row">&nbsp;</div>,
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h3>Total da compra: R$ {Number.parseFloat(this.props.total).toFixed(2)}</h3>
        </div>
      </div>,
      <div className="row">&nbsp;</div>,
      <div className="row">
        { products.map((product: object) =>
            <Product {...product}/>
        ) }
      </div>,
      { btnCleanList },
      <div className="row">&nbsp;</div>
    ]) as JSX.Element[];
  }
}

const mapStateToProps = (state) => {
  const { products, total } = state;
  return {
    products,
    total
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmptyProducts: () => {
    dispatch(emptyProducts());
  },
  dispatchEmptyTotal: () => {
    dispatch(emptyTotal());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
