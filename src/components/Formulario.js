import React, { Fragment, useState } from "react";
import uuid from 'uuid/v4'
const Formulario = ({crearCita}) => {
  //crear state de citas
  const [cita, updateCita] = useState({
    mascota: "",
    dueño: "",
    fechaCita: "",
    horaCita: "",
    sintomas: ""
  });

  const [error, updateError] = useState(false);
  //cambiar state de la cita, se ejecuta cuando se escribe en un input
  const updateState = e => {
    updateCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };
  //extraer valores
  const { mascota, dueño, fechaCita, sintomas, horaCita } = cita;

  //funcion cuando el usuario apreta agregar cita
  const submitCita = e => {
    e.preventDefault();
    //validacion
    if 
    (
      mascota.trim() === "" ||
      dueño.trim() === "" ||
      fechaCita.trim() === "" ||
      sintomas.trim() === "" ||
      horaCita.trim() === ""
    ) 
    {
      updateError(true);
      return;
    }
    updateError(false);

    // asignar un id
    cita.id = uuid();
    //crear la cita
    crearCita(cita);
    //reiniciar el form
    updateCita({
        mascota: "",
        dueño: "",
        fechaCita: "",
        horaCita: "",
        sintomas: ""
    })
  };
  return (
    <Fragment>
      <h1>Crear Cita</h1>
      
      {error ? <p className='alerta-error'>TODOS LOS CAMPOS SON OBLIGATORIOS</p> 
      :null}

      <form onSubmit={submitCita}>
        <label>Nombre de la mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={updateState}
          value={mascota}
        ></input>

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Nombre dueño"
          onChange={updateState}
          value={dueño}
        ></input>

        <label>Fecha de la cita</label>
        <input
          type="date"
          name="fechaCita"
          className="u-full-width"
          onChange={updateState}
          value={fechaCita}
        ></input>

        <label>Hora de la cita</label>
        <input
          type="time"
          name="horaCita"
          className="u-full-width"
          onChange={updateState}
          value={horaCita}
        ></input>

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={updateState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
