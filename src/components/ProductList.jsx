import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await axios.get(API);
    console.log(data);
    setProducts(data);
  };

  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((elem) => (
        <ProductCard getProducts={getProducts} {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ProductList;
