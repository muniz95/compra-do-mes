import Component from 'inferno-component'
import { removeProduct, increaseTotal, decreaseTotal, emptyTotal } from '../actions'
import { connect } from 'inferno-redux'

class Product extends Component {
  constructor(props) {
    super(props)

    const { quantity, price } = props
    const total = (quantity * price).toFixed(2)
    this.state = {
      product: {
        ...props,
        total
      }
    }
    props.dispatchIncreaseTotal(total)
    
    console.log(this.state)
  }
  
  removeProduct() {
    const { product, total } = this.state
    this.props.dispatchDecreaseTotal(total)
    this.props.dispatchRemoveProduct(product)
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
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
          <i className="fa fa-minus-square" onClick={this.removeProduct}></i>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchRemoveProduct: (product) => {
    dispatch(removeProduct(product))
  },
  dispatchIncreaseTotal: (value) => {
    dispatch(increaseTotal(value))
  },
  dispatchDecreaseTotal: (value) => {
    dispatch(decreaseTotal(value))
  },
  dispatchEmptyTotal: (value) => {
    dispatch(emptyTotal(value))
  }
})

export default connect(null, mapDispatchToProps)(Product)
