import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useAddTodo() {
  const URL = "http://localhost:8000";

  const initialState = {
    title: "",
    location: "",
    description: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let { title, description, location } = state;
    if ((!title, !description, !location)) {
      return toast.error("Please fill all the fields");
    }

    if (title.length < 3) {
      return toast.error("Please enter a title");
    }
    if (location.length < 3) {
      return toast.error("Please enter a location");
    }
    if (description.length < 3) {
      return toast.error("Please enter a description");
    }

    let todo = {
      title,
      description,
      location,
      // status: "active",
      // dateCreated: new Date().getTime(),
    };

    console.log(state);
    axios
      .post(`${URL}/createTodo`, todo)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    axios
      .get(`${URL}/readTodos`)
      .then((res) => {
        const { data } = res;
        console.log("array", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);
  return {
    state,
    handleChange,
    handleSubmit,
  };
}
