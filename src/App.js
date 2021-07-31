import React, { Component } from "react";
import "./App.css";
import "h8k-components";
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";
let count = 0;

class App extends Component {
  constructor() {
    super();
    const products = [...PRODUCTS].map((product, index) => {
      product.id = index + 1;
      product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    });
    this.state = {
      cart: {
        items: [],
      },
      products,
    };
    this.getCartItems = this.getCartItems.bind(this);
  }

  getCartItems(name, qty) {
    count = 0;
    console.log(name);
    console.log(qty);
    let tempItems = this.state.cart.items;
    tempItems.forEach((item) => {
      if (item.item === name) {
        item.quantity = qty;
        count = 1;
      }
    });
    if (count === 0) {
      tempItems.push({ item: name, quantity: qty });
    }

    console.log(count, tempItems);
    tempItems = tempItems.filter((item) => item.quantity > 0);
    this.setState({ cart: { items: tempItems } });
  }

  render() {
    console.log(this.state.cart.items);
    return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-row shop-component">
          <ProductList
            products={this.state.products}
            getCartItems={this.getCartItems}
          />
          <Cart cart={this.state.cart} />
        </div>
      </div>
    );
  }
}

export const PRODUCTS = [
  {
    name: "Cap",
    price: 5,
  },
  {
    name: "HandBag",
    price: 30,
  },
  {
    name: "Shirt",
    price: 35,
  },
  {
    name: "Shoe",
    price: 50,
  },
  {
    name: "Pant",
    price: 35,
  },
  {
    name: "Slipper",
    price: 25,
  },
];
export default App;
