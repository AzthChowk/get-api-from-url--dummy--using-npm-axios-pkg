import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dummyjsonproduct.css";
import rating1 from "../images/rating1.png";
import rating2 from "../images/rating2.png";
import rating3 from "../images/rating3.png";
import rating4 from "../images/rating4.png";
import rating5 from "../images/rating5.png";

const url = "https://dummyjson.com/products";
const DummyJsonProduct = () => {
  const [items, getItems] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await axios.get(url);
        console.log(productList.data.products);
        getItems(productList.data.products);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  function checkRating(r) {
    if (r === 1) return rating1;
    if (r === 2) return rating2;
    if (r === 3) return rating3;
    if (r === 4) return rating4;
    else return rating1;
  }
  return (
    <>
      {items.map(
        ({
          id,
          title,
          description,
          price,
          discountPercentage,
          rating,
          stock,
          brand,
          category,
          thumbnail,
        }) => {
          return (
            <div key={id} className="product-card">
              <div className="product-img">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="product-info">
                <h3>{title}</h3>
                <h4>Brand : {brand}</h4>
                <h2>$ {price.toFixed(2)}</h2>
                <p>{description}</p>
                <h4>In stock : {stock}</h4>
                {/* <h4>Rating : {Math.round(rating)}</h4> */}
                {/* calculates the rating(rating are rounded) and return value as a image, which are locally store */}
                <img src={checkRating(Math.round(rating))} alt="" />

                <h4>Category : {category}</h4>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default DummyJsonProduct;
