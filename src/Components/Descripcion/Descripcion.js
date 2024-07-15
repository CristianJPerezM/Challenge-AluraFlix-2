import "./Descripcion.css"

const Descripcion = (props) => {
    return <div className="descripcion">
        <label>{props.titulo}</label>
        <input placeholder={props.placeholder} />
    </div>
}

export default Descripcion