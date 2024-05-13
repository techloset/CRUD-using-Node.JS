import React from "react";
import useAddTodo from "../../hooks/useAddTodo";

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
