// import React, { Component } from "react";
// import rolexImg from "../images/rolex.jpg";
// import audemarsImg from "../images/audemars.jpg";
// import breiltingImg from "../images/breitling.jpg";
// import cartierImg from "../images/cartier.jpg";
// import hublotImg from "../images/hublot.png";
// import omegaImg from "../images/omega.jpg";
// import vacheronImg from "../images/vacheron.jpg";

// const Watches = props => {
//   const renderedList = props.watches.map((item, i) => {
//     return (
//       <div key={i}>
//         <br />
//         <img src={item.image} style={{ width: 300 }} alt={"Blah"} />
//         <br />
//         {item.brand}
//         <br />
//         {item.model}
//         <br />
//         {item.price}
//         <br />
//         <button onClick={() => props.addToCart(item)}>Add to cart</button>
//         <br />
//       </div>
//     );
//   });
//   return renderedList;
// };

// class Products extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [
//         {
//           brand: "Rolex",
//           model: "Daytona",
//           price: 22000,
//           image: rolexImg,
//           qty: 1
//         },
//         {
//           brand: "Omega",
//           model: "Speedmaster",
//           price: 6000,
//           image: omegaImg,
//           qty: 1
//         },
//         {
//           brand: "Vacheron Constantin",
//           model: "Overseas",
//           price: 22000,
//           image: vacheronImg,
//           qty: 1
//         },
//         {
//           brand: "Audemars Piguet",
//           model: "Royal Oak",
//           price: 26000,
//           image: audemarsImg,
//           qty: 1
//         },
//         {
//           brand: "Cartier",
//           model: "Santos",
//           price: 8000,
//           image: cartierImg,
//           qty: 1
//         },
//         {
//           brand: "Breitling",
//           model: "Avenger",
//           price: 8000,
//           image: breiltingImg,
//           qty: 1
//         },
//         {
//           brand: "Hublot",
//           model: "Spirit of Big Bang",
//           price: 21000,
//           image: hublotImg,
//           qty: 1
//         }
//       ]
//     };
//   }
//   render() {
//     return (
//       <>
//         <h3>Products</h3>
//         <Watches
//           watches={this.state.products}
//           addToCart={watch => this.props.addToCart(watch)}
//         />
//       </>
//     );
//   }
// }

// export default Products;
