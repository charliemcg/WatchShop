import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Rolex from "./components/brands/Rolex";
import Audemars from "./components/brands/Audemars";
import Breguet from "./components/brands/Breguet";
import Breitling from "./components/brands/Breitling";
import Cartier from "./components/brands/Cartier";
import Hublot from "./components/brands/Hublot";
import Omega from "./components/brands/Omega";
import Vacheron from "./components/brands/Vacheron";
import Sohne from "./components/brands/Sohne";
import Patek from "./components/brands/Patek";
import "./app.css";
import Footer from "./components/Footer";
import IndividualProduct from "./components/IndividualProduct";
import daytonaImg from "./images/rolex/daytona.jpg";
import { updateCart } from "./actions/blahActions";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   productsInCart: [],
    //   showBrands: false
    // };
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart = watch => {
    // const newArr = this.state.productsInCart;
    const newArr = this.props.productsInCart;
    let needToAdd = true;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === watch) {
        newArr[i].qty++;
        needToAdd = false;
      }
    }
    if (needToAdd) {
      newArr.push(watch);
    }
    this.props.updateCart(newArr);
    // this.setState({ productsInCart: newArr });
  };

  removeFromCart = watch => {
    // let newArr = this.state.productsInCart;
    let newArr = this.props.productsInCart;
    let index;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === watch) {
        index = i;
        newArr[i].qty = 1;
      }
    }
    newArr.splice(index, 1);
    this.props.updateCart(newArr);
    // this.setState({ productsInCart: newArr });
  };

  render() {
    console.log(this.props);
    return (
      <div className="universal">
        <BrowserRouter>
          <Navbar
            // productsInCart={this.state.productsInCart}
            productsInCart={this.props.productsInCart}
            toggleBrands={this.toggleBrands}
          />
          <br />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/cart"
              render={() => (
                <Cart
                  // products={this.state.productsInCart}
                  products={this.props.productsInCart}
                  removeFromCart={watch => this.removeFromCart(watch)}
                />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route
              path="/rolex"
              render={() => (
                <Rolex
                  addToCart={watch => this.addToCart(watch)}
                  watchToShow={watch => {
                    console.log(watch);
                  }}
                />
              )}
            />
            <Route
              path="/sohne"
              render={() => (
                <Sohne addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/audemars"
              render={() => (
                <Audemars addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/breguet"
              render={() => (
                <Breguet addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/breitling"
              render={() => (
                <Breitling addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/cartier"
              render={() => (
                <Cartier addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/hublot"
              render={() => (
                <Hublot addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/omega"
              render={() => (
                <Omega addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/patek"
              render={() => (
                <Patek addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/vacheron"
              render={() => (
                <Vacheron addToCart={watch => this.addToCart(watch)} />
              )}
            />
            <Route
              path="/indivProduct/:model"
              render={() => (
                <IndividualProduct
                  // model={{
                  //   brand: "Rolex",
                  //   model: "Daytona",
                  //   price: 22000,
                  //   image: daytonaImg,
                  //   qty: 1
                  // }}
                  model={this.props.selectedWatch}
                  addToCart={watch => this.addToCart(watch)}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsInCart: state.productsInCart,
    selectedWatch: state.selectedWatch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCart: newArr => {
      dispatch(updateCart(newArr));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
