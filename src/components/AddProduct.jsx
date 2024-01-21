import axios from "axios";
import React, { useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    if (!name && !phone) {
      return;
    }
    let newProduct = {
      todoName: name,
      todoPhone: phone,
    };
    addTodo(newProduct);
    navigate("/products");
    setName("");
    setPhone("");
  };
  async function addTodo(newTodo) {
    await axios.post(API, newTodo);
  }
  return (
    <div>
      <div className="container">
        <h1>Todo App</h1>
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone number"
          />
          <button onClick={handleClick}>Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
