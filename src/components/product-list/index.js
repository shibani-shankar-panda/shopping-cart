import React, { Component } from "react";
import "./index.css";
import Product from "../product";

export default class ProductList extends Component {
  constructor(props) {
    super();
    // this.props.getCartItems = this.props.getCartItems.bind(this);
    // this.state = {
    //   item = 0
    // };
    // this.addCartHandler = this.addCartHandler.bind(this);
    // this.addItemHandler = this.addItemHandler.bind(this);
    // this.deleteItemHandler = this.deleteItemHandler.bind(this);
  }

  //   addCartHandler(e) {
  //     this.setState({ item: 1 });
  //     console.log(e);
  //   }

  //   addItemHandler(e) {
  //     this.setState((prevState) => ({ item: prevState.item + 1 }));
  //   }

  //   deleteItemHandler(e) {
  //     if (this.state.item === 0) return;
  //     this.setState((prevState) => ({ item: prevState.item - 1 }));
  //   }

  render() {
    return (
      <div className="layout-row wrap justify-content-center flex-70 app-product-list">
        {this.props.products.map((product, i) => {
          return (
            <Product
              item={product}
              index={i}
              getCartItems={this.props.getCartItems}
            />
          );
        })}
      </div>
    );
  }
}

export const UpdateMode = {
  ADD: 1,
  SUBTRACT: 0,
};
