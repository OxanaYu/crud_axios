import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../helpers/const";

const ProductCard = ({ todoName, todoPhone, id, getProducts }) => {
  const deleteTodo = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <li className="todo">
        <label>
          <input type="checkbox" />
          <span>{todoName}</span>
          <span>{todoPhone}</span>
          <Button onClick={() => deleteTodo(id)}>Delete</Button>
          <Link to={`/edit/${id}`}>
            <Button>Edit</Button>
          </Link>
          <Button>Details</Button>
        </label>
      </li>
    </div>
  );
};

export default ProductCard;
