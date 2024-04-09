import React from "react";
import "./Hero.css";
import heroImg from "../../assests/images/hero-img.svg";

const Hero1 = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-section">
          <div>
            <h2>Поставщик Дальнего Востока</h2>
            <p className="hero-text">
              Наши клиенты получают полный спектр услуг по работе с Китаем.
              Начиная с подбора производителя заканчивая доставкой товара до
              двери. Настолько прозрачных сделок с Китаем вы еще не
              осуществляли.
            </p>
            <div className="hero-link">Узнать больше</div>
            <div className="row-line"></div>
          </div>
          <div>
            <img id="hero-img" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
