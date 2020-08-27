import React from "react";
import { connect } from "react-redux";
import act from "../../redux/actions";
import Product from "../../models/Product";
import S from './styled';

interface IProps {
  dispatchSaveProduct: (product: Product) => void;
  dispatchUpdateProduct: (product: Product) => void;
  dispatchEditProduct: (product: Product) => void;
  dispatchIncreaseTotal: (value: any) => void;
  dispatchDecreaseTotal: (value: any) => void;
  product: Product;
}

interface IState {
  id: number;
  name: string;
  price: number;
  product: Product;
  quantity: number;
}

class ProductForm extends React.Component<IProps, IState> {
  public state: IState = {
    id: 0,
    name: "",
    price: 0,
    product: new Product(),
    quantity: 0
  };

  constructor(props: IProps) {
    super(props);

    this.save = this.save.bind(this);
  }

  static getDerivedStateFromProps(prevProps: IProps, currentState: IState) {
    if(Object.keys(prevProps.product).length) {
      prevProps.dispatchEditProduct({} as Product);
      return {...prevProps.product};
    }
    return null;
  }

  public save(): void {
    const product: Product = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      total: 0
    };
    const { quantity, price } = product;
    product.total = quantity * price;
    if (!product.id) {
      product.id = Date.now();
      this.props.dispatchSaveProduct(product);
    } else {
      this.props.dispatchUpdateProduct(product);
    }
    this.props.dispatchIncreaseTotal(product.total);

    this.cleanForm();
  }

  public cleanForm(): void {
    this.setState({
      id: 0,
      name: "",
      price: 0,
      quantity: 0
    });
  }

  public render(): JSX.Element {
    return (
      <form autoComplete="off">
        <S.FormFieldArea>
          <label htmlFor="name">Produto</label>
          <input
            onChange={(event) => this.setState({name: event.target.value})}
            type="text"
            className="form-control"
            id="name"
            placeholder="Arroz, feijão, ..."
            value={this.state.name}
          />
        </S.FormFieldArea>
        <S.FormFieldArea>
          <label htmlFor="quantity">Quantidade</label>
          <input
            onChange={(event) => this.setState({quantity: Number.parseFloat(event.target.value)})}
            type="number"
            className="form-control"
            id="quantity"
            placeholder="Quantidade"
            value={this.state.quantity}
          />
        </S.FormFieldArea>
        <S.FormFieldArea>
          <label htmlFor="price">Preço</label>
          <input
            onChange={(event) => this.setState({price: Number.parseFloat(event.target.value)})}
            type="number"
            className="form-control"
            id="price"
            placeholder="Preço unitário"
            value={this.state.price}
            />
        </S.FormFieldArea>
        <S.FormFieldArea>
          <button type="button" onClick={this.save}>Salvar</button>
        </S.FormFieldArea>
      </form>
    );
  }
}

const mapStateToProps = (state: IState) => {
  const { product } = state;
  return {
    product
  };
};

const mapDispatchToProps = {
  dispatchDecreaseTotal: act.decreaseTotal,
  dispatchIncreaseTotal: act.increaseTotal,
  dispatchSaveProduct: act.saveProduct,
  dispatchUpdateProduct: act.updateProduct,
  dispatchEditProduct: act.editProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
