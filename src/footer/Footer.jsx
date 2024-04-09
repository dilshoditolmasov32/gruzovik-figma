import React from "react";
import "./Footer.css";
import instgram from ".././assests/images/instgram.svg";
import facebook from ".././assests/images/facebook.svg";

import next from ".././assests/images/Arrow-next.svg";

const linksFooter = [
  {
    id: 1,
    title: "Каталог",
    link: ["o компании", "Индивидуальная ", "Партнерам"],
  },
  {
    id: 2,
    title: "2D, 3D модели",
    link: ["Шоу-румы", "Контакты ", "Конфигуратор"],
  },
];

const Footer = () => {
  const footer__links = linksFooter?.map((value, ind) => (
    <>
      <div className="" key={ind}>
        <h6 className="footer_page_title">{value.title}</h6>
        <ul className="footer_page_link">
          {value.link?.map((ele, index) => (
            <li key={index} className="footer_page_link-li">
              {ele}
            </li>
          ))}
        </ul>
      </div>
    </>
  ));
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-page">
          <h2>LOGO</h2>
          <div className="footer-page-links">{footer__links}</div>
          <div className="social__media__links">
            <div className="inst-faceb-link">
              <img src={instgram} alt="instagram" />
              <img src={facebook} alt="facebook" />
            </div>
            <div className="phone_number">+38 (099)-638-45-37</div>
            <button className="btn-link-footer">
              Персональная консультация
              <img src={next} alt="" className="next-logo" />
            </button>
          </div>
        </div>
        <div className="footer-page-end-text">
          © 1993–2021 Интернет-магазин «LOGO» — truck
        </div>
      </div>
    </div>
  );
};

export default Footer;
