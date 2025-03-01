import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Recommended from "./components/Recommended";
import Product from "./components/Product";
import data from "./assets/data.js";
import Card from "./components/Card";

const App = () => {
  const [SelectedCategory, setSelectedCartegory] = useState(null);

  // input filter
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== 1
  );

  // radio filter
  const handleRadioClick = (event) => {
    setSelectedCartegory(event.target.value);
  };

  // button filter
  const handleButtonClick = (event) => {
    setSelectedCartegory(event.target.value);
  };

  const filteredData = (data, query, selected) => {
    let filteredProduct = data;
    if (query) {
      filteredProduct = filteredItems;
    }

    if (selected) {
      filteredProduct = filteredProduct.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          newPrice === selected ||
          company === selected ||
          title === selected
      );
    }

    return filteredProduct.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  };

  const product = filteredData(data, query, SelectedCategory);
  return (
    <>
      <SideBar handleRadioClick={handleRadioClick} />
      <NavBar query={query} />
      <Recommended handleButtonClick={handleButtonClick} />
      <Product product={product} />
    </>
  );
};

export default App;
