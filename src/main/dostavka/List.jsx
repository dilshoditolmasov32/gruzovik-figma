import React from "react";
import "./List.css";
import dostavka from "../../assests/images/dostavka.svg";
import ishonch from "../../assests/images/ishonch.svg";
import ustanovka from "../../assests/images/ustanovka.svg";

const data = [
  {
    title: "Предложение от продавца",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
  },

  {
    title: "Доставка",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
  },

  {
    title: "Установка у клиента",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
  },
];
const List = () => {
  const listData = data?.map((value, index) => (
    <div className="list__item" key={index}>
      <div>
        <img className="list__item_img" src={dostavka} alt="" />
      </div>
      <div className="">
        <h5 className="card-title">{value.title}</h5>
        <div className="row__line"></div>
        <p className="paragraph-text1">{value.text}</p>
      </div>
    </div>
  ));
  return (
    <div className="lists">
      <div className="container">
        <h2>Этапы поставки </h2>
        <div className="list_items">{listData}</div>
      </div>
    </div>
  );
};

export default List;
