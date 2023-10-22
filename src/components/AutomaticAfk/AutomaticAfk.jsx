import React from 'react'
import { useState, useEffect } from 'react'
import "./AutomaticAfk.css"

const AutomaticAfk = () => {

    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    useEffect ( () => {

        let tiempoEspera = null;

        const reiniciarTemporizador = () => {
            clearTimeout(tiempoEspera);
            tiempoEspera = setTimeout( ()=> {
                setMostrarMensaje(true)
            }, 60000)
        }

        const manejarActividadUsuario = () => {
            reiniciarTemporizador();
        }

        window.addEventListener("mousemove", manejarActividadUsuario);
        window.addEventListener("keydown", manejarActividadUsuario);

        reiniciarTemporizador();

        return () => {
            window.removeEventListener("mousemove", manejarActividadUsuario);
            window.removeEventListener("keydown", manejarActividadUsuario);
            clearTimeout(tiempoEspera);
        }


    }, [])

    const seguirComprando = () => {
        setMostrarMensaje(false)
    }



  return (
    <div>
        {
            mostrarMensaje && (
                <div className='mensaje-afk activo mensaje-afk'>
                    <h2>¡No te vayas!</h2>
                    <p>Hay más por descubrir en THE VOID</p>
                    <button onClick={seguirComprando}>Seguir comprando</button>
                </div>
            )
        }
    </div>
  )
}

export default AutomaticAfk