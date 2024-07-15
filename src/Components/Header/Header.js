import "./Header.css"
import "./HeaderBoton.css"

function Header (props){
    return <header className="header">
        <img className="aluraflix" src="/img/aluraflix.png" alt='AluraFlix' />
        <div className="header-boton">
            <button className="home">Home</button>
            <button className="nuevo_video" onClick={props.cambiarMostrar}>Nuevo Video</button>
        </div>
    </header>
}

export default Header 