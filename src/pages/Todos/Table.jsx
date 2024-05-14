import axios from "axios";
import React, { useEffect, useState } from "react";

function Index() {
  const [documents, setDocuments] = useState([]);
  const URL = "http://localhost:8000";

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

  return (
    <div className="py-5 bg-light ">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <div className="h1 text-center mb-0 ">Todo's</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
