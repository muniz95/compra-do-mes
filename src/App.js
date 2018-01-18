import Component from 'inferno-component'
import Product from './components/Product'
import ProductForm from './components/ProductForm'
import { emptyTotal, emptyProducts } from './actions'
import { connect } from 'inferno-redux'
// import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      products: []
    }
    
    this.clean = this.clean.bind(this)
  }
  
  clean() {
    this.props.dispatchEmptyTotal()
    this.props.dispatchEmptyProducts()
  }

  render() {
    const { products } = this.props
    const productsHeader = products.length
      ? [
        <div className="row">&nbsp;</div>,
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"><b>Produto</b></div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><b>Qtd.</b></div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><b>Preço</b></div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"><b>Total</b></div>
        </div>
        ]
      :
        null
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
        null
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ProductForm />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3>Total da compra: R$ {Number.parseFloat(this.props.total).toFixed(2)}</h3>
          </div>
        </div>
        { productsHeader }
        { products.map(product =>
            <Product {...product}/>
        ) }
        { btnCleanList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { products, total } = state
  return {
    products,
    total
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmptyTotal: () => {
    dispatch(emptyTotal())
  },
  dispatchEmptyProducts: () => {
    dispatch(emptyProducts())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
