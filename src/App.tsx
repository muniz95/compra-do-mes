import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./components/ProductCard";
import ProductForm from "./components/ProductForm";
import { emptyProducts, emptyTotal } from "./redux/actions";
import { RootState } from "./redux/reducers";

const App = () => {
  const products = useSelector((state: RootState) => state.products);
  const total = useSelector((state: RootState) => state.total);
  const dispatch = useDispatch();
  const dispatchEmptyProducts = useCallback(
    () => dispatch(emptyProducts()),
    [dispatch]
  );
  const dispatchEmptyTotal = useCallback(
    () => dispatch(emptyTotal()),
    [dispatch]
  );

  const clean = () => {
    dispatchEmptyTotal();
    dispatchEmptyProducts();
  }

  const btnCleanList: JSX.Element = products.length ? (
    <React.Fragment>
      <button onClick={clean} className="danger">Limpar lista</button>
    </React.Fragment>
  ) : (
    <React.Fragment />
  );
  return (
    <React.Fragment>
      <div style={{marginTop: '5px', marginBottom: '5px'}}>
        <ProductForm />
      </div>
      <div style={{marginTop: '5px', marginBottom: '10px', marginLeft: '5px'}}>
        <h3>Total da compra: R$ {total.toFixed(2)}</h3>
        {btnCleanList}
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          maxHeight: "400px",
          overflow: "auto",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;
