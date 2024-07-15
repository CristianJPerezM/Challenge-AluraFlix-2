import { useState } from 'react'; //Mostrar formulario
import './App.css';
import Header from './Components/Header/Header.js';
import NuevoVideo from './Components/NuevoVideo/NuevoVideo.js'; //Mostrar formulario
import Equipo from './Components/Equipo/Equipo.js';
import Footer from './Components/Footer/Footer.js';


function App() {

  const [mostraFormulario, actualizarMostrar] = useState(false) //Mostrar formulario
  const [colaboradores, actualizarColaboradores] = useState([ { equipo:"Front-End"}, { equipo:"Back-End" }, { equipo:"Innovación y Gectión" }, { equipo:"Interés" } ]) //Para agregar video

  const cambiarMostrar = () => { //Mostrar formulario
  actualizarMostrar(!mostraFormulario) //Mostrar formulario
  } //Mostrar formulario

//registrar colaborador
  const registrarColaborador = (colaborador) =>{
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //lista de equipos o categoria
  const equipos =[

    {
      titulo:"Front-End",
      colorPrimario: "#6BD1FF"
    },
    {
      titulo:"Back-End",
      colorPrimario: "#00C86F"
    },    
    {
      titulo: "Innovación y Gectión",
      colorPrimario: "#FFBA05"
    },
    {
      titulo: "Interés",
      colorPrimario: "#2271D1"
    }
    
]

  return (
    <div>
          <Header cambiarMostrar={cambiarMostrar}/> {/* Mostrar formulario */}
          {mostraFormulario && <NuevoVideo 
            equipos={equipos.map( (equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}  
          />} {/* Mostrar formulario */}
        {/* Cualquiera de estas do lineas producen el mismo resultado */}
        {/* {mostraFormulario ? <NuevoVideo /> : <></> }  */}
        {/* {mostraFormulario && <NuevoVideo />}  */}  
        
        {
          //Estas dos opciones cumplen la misma función
          // equipos.map( (equipo) => {
          //   return <Equipo datos = {equipo} key = { equipo.titulo } />
          // } )
          equipos.map( (equipo) => <Equipo 
                                      datos = {equipo} 
                                      key = { equipo.titulo }
                                      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
                                      />)
        }
        <Footer />
    </div>
    
  );
}

export default App;
