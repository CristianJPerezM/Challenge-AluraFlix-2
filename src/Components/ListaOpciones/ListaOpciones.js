import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    //Metodo map -> arreglo.map( (equipo, ListaOpciones) =>{
    //  return <option></option>
    //})

    //Forma limpia mas corta de arreglo.map
    //{equipos.map ( (equipo, ListaOpciones) => <option key={ListaOpciones}>{equipo}</option>)}

    // const categoria =[
    //     "Front-End",
    //     "Back-End",
    //     "Innovación y Gectión",
    //     "Interés"
    // ]

    const manejarCambio = (e) => {
        props.actualizarCategoria(e.target.value)
    }

    return <div className="lista-opciones" >
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>
        { props.equipos.map ( (categoria, ListaOpciones) => {
            return <option key={ListaOpciones} value={categoria}>{categoria}</option>
        } ) }
        </select>
    </div>
}

export default ListaOpciones