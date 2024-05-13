import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

function Add() {
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
      status: "active",
      dateCreated: new Date().getTime(),
    };

    console.log(state);
    axios
      .post(`${URL}/addTodo`, todo)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <div className="h1 text-center mb-0 ">Add Todo</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="card p-3 p-md-4 mx-auto " style={{ maxWidth: 500 }}>
            <div className="row">
              <div className="col-12-col-md-6-mb-3">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="form-control mb-3"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12-col-md-6-mb-3">
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  className="form-control mb-3"
                  onChange={handleChange}
                />
                <div className="col mb-3">
                  <textarea
                    name="description"
                    placeholder="Description"
                    className="form-control"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-12 col-md-6 offset-md-3 ">
                  <button className="btn btn-primary w-100">Add Todo</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
