import { Component } from 'inferno'
import { editProduct, removeProduct, increaseTotal, decreaseTotal } from '../redux/actions'
import { connect } from 'inferno-redux'

interface IProps {
  quantity: number,
  price: number,
  dispatchDecreaseTotal: (total: number) => {},
  dispatchEditProduct: (product: any) => {},
  dispatchRemoveProduct: (product: any) => {},
}
interface IState {
  product: any
}

class Product extends Component<IProps, IState> {
  public state: any

  constructor(props: IProps) {
    super(props)

    this.state = {
      product: {...props}
    }
    
    this.removeProduct = this.removeProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }
  
  componentWillReceiveProps(props: IProps) {
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
    window.scrollTo(0, 0)
  }
  
  removeProduct() {
    const { product } = this.state
    this.props.dispatchDecreaseTotal(product.total)
    this.props.dispatchRemoveProduct(product)
  }

  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{this.state.product.name}</h4>
            <div className="row">
              <div className="col"><b>Qtd.</b></div>
              <div className="col"><b>Preço</b></div>
              <div className="col"><b>Preço total</b></div>
            </div>
            <div className="row">
              <div className="col">{this.state.product.quantity}</div>
              <div className="col">R$ {this.state.product.price}</div>
              <div className="col">R$ {this.state.product.total}</div>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <div className="col text-center">
                <i className="fa fa-2x fa-pencil" onClick={this.editProduct}></i>
              </div>
              <div className="col text-center">
                <i className="fa fa-2x fa-trash" onClick={this.removeProduct}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  dispatchEditProduct: (product: any) => {
    dispatch(editProduct(product))
  },
  dispatchRemoveProduct: (product: any) => {
    dispatch(removeProduct(product))
  },
  dispatchIncreaseTotal: (value: any) => {
    dispatch(increaseTotal(value))
  },
  dispatchDecreaseTotal: (value: any) => {
    dispatch(decreaseTotal(value))
  }
})

export default connect(null, mapDispatchToProps)(Product)
