import { useState } from "react"
import "./BotonCerrar.css"
import "./Formulario.css"
import "./BotonFormulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaOpciones from "../ListaOpciones/ListaOpciones.js"
import Descripcion from "../Descripcion/Descripcion.js"

const Formulario = (props) => {

    const manejarClick = () =>{
    }

    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    //sue puede en contar evento como evento, event o la letra e
    const manejarEnvio = (e) =>{
        e.preventDefault()
        let datosAEnviar = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form className="formulario_form" onSubmit={manejarEnvio}>
            <section className="boton-cerrar">
                <img src="/img/X_cancel.png" alt="X Cancel" onClick={manejarClick}/>
            </section>
            <h2 className="formulario_form_h2">Editar card:</h2>
            <CampoTexto 
                titulo="Título" 
                placeholder="¿qué es javascript?" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
            />
            <ListaOpciones 
                valor={categoria} 
                actualizarCategoria={actualizarCategoria}
                equipos={props.equipos}
            />
            <CampoTexto 
                titulo="Imagen" 
                placeholder="https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps" 
                required
                valor={imagen} 
                actualizarValor={actualizarImagen}
            />
            <CampoTexto 
                titulo="Video" 
                placeholder="https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap" 
                required
                valor={video} 
                actualizarValor={actualizarVideo}
            />
            <Descripcion 
                titulo="Descripción" 
                placeholder="lOREM iPSUM BLAH BLAH BLAH..." 
                valor={descripcion}
                actualizarDescripcion={actualizarDescripcion}
            />
            <div className="boton-formulario">
                <button className="guardar">Guardar</button>
                <button className="limpiar">Limpiar</button>
            </div>
        </form>
    </section>
}

export default Formulario