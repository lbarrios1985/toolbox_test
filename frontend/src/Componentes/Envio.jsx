import React, { Fragment, useState } from "react";
import axios from "axios";
import ReactJson from "react-json-view";
import isEmpty from "lodash.isempty";

import { Button } from "react-bootstrap";

const Envio = () => {
  const [datos, setDatos] = useState({
    texto: "",
  });

  const [response, setResponse] = useState({});

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setDatos({
      ...datos,
      texto: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3000/api`, datos, {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        setResponse(result);
      })
      .catch(function (error) {
        setResponse(error);
      });
  };

  return (
    <Fragment>
      <h1>Formulario</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={enviarDatos}>
          <input
            type="text"
            placeholder="Texto"
            className="form-control"
            onChange={handleInputChange}
            name="texto"
            style={{ marginBottom: "10px" }}
          ></input>
          <Button
            type="submit"
            variant="primary"
            style={{ marginBottom: "10px" }}
          >
            Enviar
          </Button>
        </form>
      </div>
      {!isEmpty(response) && (
        <ReactJson
          src={response}
          theme="solarized"
          style={{ textAlign: "left" }}
        />
      )}
    </Fragment>
  );
};

export default Envio;
