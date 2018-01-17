import Component from 'inferno-component'
import Product from './components/Product'
import ProductForm from './components/ProductForm'
import { connect } from 'inferno-redux'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      products: []
    }
  }

  render() {
    return (
      <div>
        <ProductForm />
        <p>
          {this.props.products.length ? this.props.total : '' }
        </p>
        <p className="App-intro">
          {
            this.props.products.map(product => 
              <Product {...product}/>
            )
          }
        </p>
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
