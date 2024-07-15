import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.js"

const Equipo = (props) =>{
    //Destructuracion
    const { colorPrimario, titulo } = props.datos
    const { colaboradores } = props
    const obj = {
        backgroundColor: colorPrimario
    }

    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
            <h3>{titulo}</h3>
            <div className="colaboradores">
            {
                colaboradores.map( (colaborador, index) => <Colaborador datos={colaborador} key={index} /> )
            }
            </div>
        </section>
    }</>
}

export default Equipo