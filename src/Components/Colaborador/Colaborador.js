import "./Colaborador.css"

const Colaborador = (props) => {

    const { titulo, imagen } = props.datos  

    return <div className="colaborador">
        <div className="encabezado">
            <img src={imagen} alt={titulo} />
        </div>
        <div className="botones">
            <img src="../img/borrar.png" alt="Borrar" />
            <img src="../img/editar.png" alt="Editar" />
        </div>
    </div>
}

export default Colaborador