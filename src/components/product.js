import React, { useState } from "react";
import "./product-list/index.css";

const Product = ({ item, index, getCartItems }) => {
  console.log(getCartItems);
  const [count, setCount] = useState(0);

  function addCartHandler(e) {
    setCount(1);
    getCartItems(item.name, 1);
  }

  function addItemHandler(e) {
    getCartItems(item.name, count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function deleteItemHandler(e) {
    count !== 0 && getCartItems(item.name, count - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <section
      className="w-30"
      data-testid={"product-item-" + index}
      key={item.id}
    >
      <div className="card ma-16">
        <img
          alt="Your Cart"
          src={item.image}
          className="d-inline-block align-top product-image"
        />
        <div className="card-text pa-4">
          <h5 className="ma-0 text-center">{item.name}</h5>
          <p className="ma-0 mt-8 text-center">${item.price}</p>
        </div>
        <div className="card-actions justify-content-center pa-4">
          {!count ? (
            <button
              className="x-small outlined"
              data-testid="btn-item-add"
              onClick={addCartHandler}
            >
              Add To Cart
            </button>
          ) : null}

          {count ? (
            <div className="layout-row justify-content-between align-items-center">
              <button
                className="x-small icon-only outlined"
                data-testid="btn-quantity-subtract"
                onClick={deleteItemHandler}
              >
                <i className="material-icons">remove</i>
              </button>

              <input
                type="number"
                disabled
                value={count}
                className="cart-quantity"
                data-testid="cart-quantity"
              />

              <button
                className="x-small icon-only outlined"
                data-testid="btn-quantity-add"
                onClick={addItemHandler}
              >
                <i className="material-icons">add</i>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Product;
