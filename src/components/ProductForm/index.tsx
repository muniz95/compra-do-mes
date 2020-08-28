import React from "react";
import { useSelector, useDispatch } from "react-redux";
import act from "../../redux/actions";
import S from './styled';
import { RootState } from "../../redux/reducers";

const ProductForm = () => {
  const productEdit = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const dispatchSaveProduct = React.useCallback(
    (p) => dispatch(act.saveProduct(p)),
    [dispatch]
  );
  const dispatchUpdateProduct = React.useCallback(
    (p) => dispatch(act.updateProduct(p)),
    [dispatch]
  );
  const dispatchIncreaseTotal = React.useCallback(
    (total) => dispatch(act.increaseTotal(total)),
    [dispatch]
  );

  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);

  React.useEffect(() => {
    const { id, name, price, quantity } = productEdit;
    setId(id || 0);
    setName(name || '');
    setPrice(price || 0);
    setQuantity(quantity || 0);
  }, [productEdit]);
  
  const save = () => {
    const product = {
      id,
      name,
      price,
      quantity,
      total: 0
    };
    product.total = quantity * price;
    if (!product.id) {
      product.id = Date.now();
      dispatchSaveProduct(product);
    } else {
      dispatchUpdateProduct(product);
    }
    dispatchIncreaseTotal(product.total);

    cleanForm();
  }

  const cleanForm = () => {
    setId(0);
    setName("");
    setPrice(0);
    setQuantity(0);
  }

  return (
    <form autoComplete="off">
      <S.FormFieldArea>
        <label htmlFor="name">Produto</label>
        <input
          onChange={({target}) => setName(target.value)}
          type="text"
          className="form-control"
          id="name"
          placeholder="Arroz, feijão, ..."
          value={name}
        />
      </S.FormFieldArea>
      <S.FormFieldArea>
        <label htmlFor="quantity">Quantidade</label>
        <input
          onChange={({target}) => setQuantity(Number.parseFloat(target.value))}
          type="number"
          className="form-control"
          id="quantity"
          placeholder="Quantidade"
          value={quantity}
        />
      </S.FormFieldArea>
      <S.FormFieldArea>
        <label htmlFor="price">Preço</label>
        <input
          onChange={({target}) => setPrice(Number.parseFloat(target.value))}
          type="number"
          className="form-control"
          id="price"
          placeholder="Preço unitário"
          value={price}
          />
      </S.FormFieldArea>
      <S.FormFieldArea>
        <button type="button" onClick={save}>Salvar</button>
      </S.FormFieldArea>
    </form>
  );
}

export default ProductForm;
