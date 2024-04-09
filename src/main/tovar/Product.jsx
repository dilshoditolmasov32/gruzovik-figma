import React from "react";
import "./Product.css";
import icon1 from "../../assests/images/icon1.svg";
// import icon2 from "../../assests/images/icon2.svg";
// import icon3 from "../../assests/images/icon3.svg";

const productCard = [
  {
    id: 1,
    title: "Поиск производителей по товару",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
  },
  {
    id: 2,
    title: "Поиск конкретного производителя",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
  },
  {
    id: 3,
    title: "Доставка образцов товаров",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
  },
];

const Product = () => {
  let items = productCard?.map((value, i) => (
    <div className="card" key={i}>
      <img src={icon1} alt="" />
      <h5>{value.title}</h5>
      <p className="decs">{value.text}</p>
    </div>
  ));
  return (
    <div className="products">
      <div className="container">
        <div className="product-card">{items}</div>
      </div>
    </div>
  );
};

export default Product;
