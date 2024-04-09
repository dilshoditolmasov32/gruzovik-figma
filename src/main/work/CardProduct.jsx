import React from "react";
import "./CardProduct.css";
import image1 from "../../assests/images/1-vagon.svg";
import image2 from "../../assests/images/2-vagaon.svg";
import image3 from "../../assests/images/3-vagon.svg";

let card__items = [
  {
    id: 1,
    image: <img src={image1} alt="" />,
    title: "Станки и оборудование",
    textDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    price: "20 000 руб.",
  },
  {
    id: 2,
    image: <img src={image2} alt="" />,
    title: "Станки и оборудование",
    textDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    price: "20 000 руб.",
  },
  {
    id: 3,
    image: <img src={image3} alt="" />,
    title: "Станки и оборудование",
    textDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
    price: "20 000 pyб.",
  },
];

const CardProduct = () => {
  const card__item = card__items?.map((value, index) => (
    <div className="cards-item" key={index}>
      <div className="card-img">{value.image}</div>
      <h6> {value.title} </h6>
      <p className="card-text">{value.textDesc}</p>
      <h4>{value.price}</h4>
      <div className="line"></div>
    </div>
  ));
  return (
    <div className="card__aside">
      <div className="container">
        <h2>Выполненные работы</h2>
        <p className="paragraph-text">
          Мы собрали информацию по грузам, которые мы уже доставили. <br /> У
          нас специальный подход к каждому виду товаров.
        </p>

        <div className="card__items">{card__item}</div>
      </div>
    </div>
  );
};

export default CardProduct;
