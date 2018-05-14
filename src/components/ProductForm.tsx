import { Component } from 'inferno'
import { connect } from 'inferno-redux'
import { saveProduct, updateProduct, increaseTotal, decreaseTotal } from '../redux/actions'

class ProductForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
    
    this.save = this.save.bind(this)
  }
  
  componentWillReceiveProps(props) {
    this.setState({...props.product})
  }
  
  save() {
    const product = this.state
    const { quantity, price } = product
    product.total = (quantity * price).toFixed(2)
    if (!product.id) {
      product.id = Date.now()
      this.props.dispatchSaveProduct(product)
    } else {
      this.props.dispatchUpdateProduct(product)
    }
    this.props.dispatchIncreaseTotal(product.total)
    
    this.cleanForm()
  }
  
  cleanForm() {
    this.setState({
      name: '',
      quantity: '',
      price: '',
      id: false
    })
  }
  
  render() {
    return (
      <form>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="form-group">
              <label for="name">Produto</label>
              <input
                onChange={event => this.setState({name: event.target.value})}
                type="text"
                className="form-control"
                id="name"
                placeholder="Arroz, feijão, ..."
                value={this.state.name}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="form-group">
              <label for="quantity">Quantidade</label>
              <input
                onChange={event => this.setState({quantity: event.target.value})}
                type="number"
                className="form-control"
                id="quantity"
                placeholder="Quantidade"
                value={this.state.quantity}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="form-group">
              <label for="price">Preço</label>
              <input
                onChange={event => this.setState({price: Number.parseFloat(event.target.value).toFixed(2)})}
                type="number"
                className="form-control"
                id="price"
                placeholder="Preço unitário"
                value={this.state.price}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <button type="button" onClick={this.save} className="btn btn-default">Salvar</button>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { products, product } = state
  return {
    products,
    product
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveProduct: (product) => {
    dispatch(saveProduct(product))
  },
  dispatchUpdateProduct: (product) => {
    dispatch(updateProduct(product))
  },
  dispatchIncreaseTotal: (value) => {
    dispatch(increaseTotal(value))
  },
  dispatchDecreaseTotal: (value) => {
    dispatch(decreaseTotal(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)