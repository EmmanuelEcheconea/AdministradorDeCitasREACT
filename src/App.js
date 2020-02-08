import React, {Fragment, useState} from 'react';
import './index.css';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App() {

  //arreglo de citas
  const [citas, updateCitas] = useState([]);

  //agrega una cita al array de citas
  const crearCita = (cita) =>
  {
    updateCitas([
      ...citas, cita
    ]);
  }
  //quita una cita del array de citas
  const quitarCita = (id) =>
  {
    const nuevoArrayDeCitas = citas.filter(cita => cita.id !== id);
    updateCitas(nuevoArrayDeCitas);
  }
  
  //mensaje condicional
  const titulo = citas.length === 0 ? 'NO HAY CITAS' : 'ADMINISTRA TUS CITAS';
  return (
    <Fragment>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita ={crearCita}
            />
          </div>
          <div  className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita 
                cita={cita}
                key={cita.id}
                quitarCita={quitarCita}>

              </Cita>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
