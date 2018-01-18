import Component from 'inferno-component'
import { editProduct, removeProduct, increaseTotal, decreaseTotal } from '../actions'
import { connect } from 'inferno-redux'

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {...props}
    }
    
    this.removeProduct = this.removeProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }
  
  componentWillReceiveProps(props) {
    const { quantity, price } = props
    const total = (quantity * price).toFixed(2)
    this.setState({
      product: {
        ...props,
        total
      }
    })
  }
  
  editProduct() {
    const { product } = this.state
    this.props.dispatchDecreaseTotal(product.total)
    this.props.dispatchEditProduct(product)
  }
  
  removeProduct() {
    const { product } = this.state
    this.props.dispatchDecreaseTotal(product.total)
    this.props.dispatchRemoveProduct(product)
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          { this.state.product.name }
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          { this.state.product.quantity }
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          { this.state.product.price }
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          { this.state.product.total }
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
          <i className="fa fa-pencil" onClick={this.editProduct}></i>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
          <i className="fa fa-minus-square" onClick={this.removeProduct}></i>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEditProduct: (product) => {
    dispatch(editProduct(product))
  },
  dispatchRemoveProduct: (product) => {
    dispatch(removeProduct(product))
  },
  dispatchIncreaseTotal: (value) => {
    dispatch(increaseTotal(value))
  },
  dispatchDecreaseTotal: (value) => {
    dispatch(decreaseTotal(value))
  }
})

export default connect(null, mapDispatchToProps)(Product)
