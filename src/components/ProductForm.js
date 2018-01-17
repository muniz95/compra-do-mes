import Component from 'inferno-component'
import { connect } from 'inferno-redux'
import { saveProduct } from '../actions'

class ProductForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {}
    
    this.save = this.save.bind(this)
  }
  
  save() {
    this.props.dispatchSaveProduct(this.state)
    this.cleanForm()
  }
  
  cleanForm() {
    this.setState({
      name: '',
      quantity: '',
      price: ''
    })
  }
  
  render() {
    return (
      <form>
        <div className="form-group">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
              onChange={event => this.setState({price: event.target.value})}
              type="number"
              className="form-control"
              id="price"
              placeholder="Preço unitário"
              value={this.state.price}
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <button type="button" onClick={this.save} className="btn btn-default">Salvar</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveProduct: (product) => {
    dispatch(saveProduct(product))
  }
})

export default connect(null, mapDispatchToProps)(ProductForm)