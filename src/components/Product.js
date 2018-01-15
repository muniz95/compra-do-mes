import Component from 'inferno-component'

export class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: props.product
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
          Nome do produto
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          Quantidade
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          Preço
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
          x
        </div>
      </div>
    )
  }
}
