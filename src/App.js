import "./App.css";
import Navbar from "./header/Navbar";
import Hero from "./main/hero/Hero1";
import Product from "./main/tovar/Product";
import CardProduct from "./main/work/CardProduct";
import Car from "./main/car-item/Car";
import Footer from "./footer/Footer";
import List from "./main/dostavka/List";
// import Card from "./main/cards/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <CardProduct />
      |<List />
      {/* <Card /> */}
      <Car />
      <Footer />
    </div>
  );
}

export default App;
