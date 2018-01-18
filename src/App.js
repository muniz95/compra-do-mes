import Component from 'inferno-component'
import Product from './components/Product'
import ProductForm from './components/ProductForm'
import { connect } from 'inferno-redux'
// import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      products: []
    }
  }

  render() {
    const { products } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <ProductForm />
          </div>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2>Total da compra: R$ {Number.parseFloat(this.props.total).toFixed(2)}</h2>
          </div>
        </div>
          {
            products.map(product => {
              
              console.log('produto recebido: ', product);
              return <Product {...product}/>
            }
          )
          }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { products, total } = state
  return {
    products,
    total
  }
}

export default connect(mapStateToProps, null)(App)
