import React, { useEffect } from "react";
import { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Alert from "react-bootstrap/Alert";
import ProductFunc from "./ProductFunc";
import { getallProducts, deleteProduct } from "../service/api";

function ProductsFunc() {
  const [products, setProducts] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const deleteProd = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleteProduct(id);
      getallProducts();
      window.location.reload('/products')
    }
  };

  const buy = (product, updateQuantity) => {
    product.quantity--;
    updateQuantity(product.quantity);
    console.log(product.quantity--);
    showAlert1();
  };

  const showAlert1 = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  useEffect(() => {
    console.log("====================================");
    console.log("Component Mounted");
    console.log("====================================");
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  });

  useEffect(() => {
    getallProducts().then((products) => setProducts(products));
  }, []);

  return (
    <>
      {showWelcome && <Alert variant="success">Welcome to our store!</Alert>}
      <CardGroup>
        {products.map((p, i) => (
          <div>
            <ProductFunc key={i} product={p} buyFunction={buy} deleteProd={deleteProd}/> 
            {/* <ProductFunc key={i} product={p} buyFunction={buy} deleteProd={deleteProd}/> */}
          </div>
        ))}
      </CardGroup>
      {showAlert && <Alert variant="success">You bought an Item</Alert>}
    </>
  );
}

export default ProductsFunc;
