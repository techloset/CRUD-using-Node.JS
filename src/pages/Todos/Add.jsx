import useAddTodo from "../hooks/useAddTodo.js";
import CustomInput from "../components/CustomInput.jsx";
import CustomTextArea from "../components/CustomTextArea.jsx";
import React from "react";

function Add() {
  const { handleChange, handleSubmit } = useAddTodo();

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
                <CustomInput
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12-col-md-6-mb-3">
                <CustomInput
                  type="placeholder"
                  placeholder="Location"
                  name="location"
                  onChange={handleChange}
                />
                <CustomTextArea
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                />
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
