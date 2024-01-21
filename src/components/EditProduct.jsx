import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../helpers/const";
import { useEffect } from "react";
import { Button } from "@mui/material";

const EditProduct = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [todoDetail, setTodoDetail] = useState("");
  const [title, setTitle] = useState(todoDetail.todoName);
  const [number, setNumber] = useState(todoDetail.todoPhone);

  useEffect(() => {
    getTodo(id);
  }, []);

  const getTodo = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    setTodoDetail(data);
  };

  useEffect(() => {
    if (todoDetail) {
      setTitle(todoDetail.todoName);
      setNumber(todoDetail.todoPhone);
    }
  }, [todoDetail]);

  const handleClick = () => {
    if (!title && !number) {
      return;
    }
    let newTodo = {
      todoName: title,
      todoPhone: number,
    };
    editTodo(id, newTodo);
    navigate("/products");
  };
  async function editTodo(id, newTodo) {
    await axios.patch(`${API}/${id}`, newTodo);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      />
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default EditProduct;
