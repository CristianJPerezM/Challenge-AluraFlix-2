import { useState } from "react"
import "./NuevoVideo.css"
import "./BotonFormulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones.js"
import Descripcion from "../Descripcion/Descripcion.js"
// import BotonFormulario from "../BotonFormulario/BotonFormulario.js"

const NuevoVideo = (props) => {

    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    const { registrarColaborador } = props

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
        registrarColaborador(datosAEnviar)
    }

    return <section className="nuevo-video" onSubmit={manejarEnvio}>
            <div className="nuevo-video_h">
                <h1 className="nuevo-video_h1">Nuevo Video</h1>
                <h2 className="nuevo-video_h2">Complete el formulario para crear una nueva tarjeta de video</h2>                
            </div>
            <form className="nuevo-video_form">
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
            </form>
            <div className="boton-formulario">
                <button className="guardar">Guardar</button>
                <button className="limpiar">Limpiar</button>
            </div>
    </section>
}

export default NuevoVideo