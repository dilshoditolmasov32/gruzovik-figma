// import React from "react";
// import "./Card.css";
// import Alina from "../../assests/images/alina.png";
// import Anton from "../../assests/images/anton.png";
// import Boris from "../../assests/images/boris.png";
// import Elene from "../../assests/images/elene.png";
// import Ivan from "../../assests/images/ivan.png";
// import Victor from "../../assests/images/viktor.png";
// import instagram from "../../assests/images/instagram.png";
// import wike from "../../assests/images/instagram.png";
// import linkedin from "../../assests/images/linkedin.png";
// const Card = () => {
//   const users = [
//     {
//       userName: [
//         "Антон Макаров",
//         "Елена Валерьева",
//         "Иван Аркадьев ",
//         "Борис Вавилов",
//         "Алина Кравец",
//         "Виктор Козуб",
//       ],
//       company: [
//         "Руководитель компании",
//         "Главный бухгалтер",
//         "Менеджер по закупкам",
//         "Бухгалтер",
//         "Сотрудник отдела кадров",
//         "Менеджер по закупкам",
//       ],
//       userImages: [
//         <img src={Alina} alt="instagram" />,
//         <img src={Anton} alt="wike" />,
//         <img src={Boris} alt="linkedin" />,
//         <img src={Elene} alt="linkedin" />,
//         <img src={Ivan} alt="linkedin" />,
//         <img src={Victor} alt="linkedin" />,
//       ],
//     },
//   ];

//   users?.map((val, inx) => {
//     const name = val.userName;
//     const workZone = val.company;
//     const userImage = val.userImages;

//     <div className="user_card">
//       <div className="column__line"></div>

//       <div className="user_desc">
//         {userImage?.map((item, ind) => (
//           <div className="user-img" key={ind}>
//             {item}
//           </div>
//         ))}
//         <div className="user-title">
//           {name?.map((fullName, index) => (
//             <div className="name" key={inx}>
//               {fullName}
//             </div>
//           ))}

//           {workZone?.map((el, i) => (
//             <div className="company" key={i}>
//               {el}
//             </div>
//           ))}
//           <div className="row-line"></div>
//         </div>
//         <div className="social-media">
//           {instagram} {wike} {linkedin}
//         </div>
//       </div>
//     </div>;
//   });

//   return (
//     <div className="cards">
//       <div className="container">{users}</div>
//     </div>
//   );
// };

// export default Card;
