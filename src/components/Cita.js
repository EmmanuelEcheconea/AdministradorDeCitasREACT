import React, {Fragment,useState} from 'react';

const Cita = ({cita,quitarCita}) =>{
    //paso a cada una el valor correspondiente al objeto cita
    const { mascota, dueño, fechaCita, sintomas, horaCita } = cita;


    return(
        <div className='cita'>
            <p>Mascota: <span>{mascota}</span></p>
            <p>Dueño: <span>{dueño}</span></p>
            <p>Fecha de la cita: <span>{fechaCita}</span></p>
            <p>Hora de la cita: <span>{horaCita}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button
                className='button eliminar u-full-width'
                onClick={()=>quitarCita(cita.id)}>
                    QUITAR CITA
            </button>

        </div>
    )
};
export default Cita;