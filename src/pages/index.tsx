import Image from 'next/image';
import Tabla from '../components/Tabla/Tabla';
import Proyecto from '../components/Proyecto/Proyecto'
import {datosProyecto, redesProyecto} from '../const/consts.js'

export const Home = () => {

  
  return(
    <div>
      <section className="presentacion">
        <div className="contenido">
          <div className="izquierda">
            <div className="titulo2">
              <h1>Hola! Me llamo</h1>
              <h1 className='Nombre'>Gabriel Ysidro<span className="cursor"></span></h1>
            </div>
            <div className="imagen">
              <a target="_blank" href="https://www.linkedin.com/in/gawayspa">
              <Image src="/Gabo.jpeg" alt="Descripción de la imagen" width={300} height={200} />
              </a>
            </div>
          </div>
          <div className="derecha">
            <p>Ingenieria de Sistemas (ULIMA)<br></br>
              Desarrollador Fullstack <br></br>
              React / Next.JS (FrontEnd) <br></br>
              Flask / Express.js (Backend) <br></br>
              Soluciones Creativas y Resultados de Calidad <br></br>
            </p>
          </div>
        </div>
      </section>

    <section className="tecnologias">
      <div className='secciones'>
        <h1 className='principal'>
            Tecnologias
          </h1>
      </div>
        
        <div className='iconos'>
          <Tabla ancho={4} largo={2}/>
        </div>
    </section>

    <section className="proyectos">
        <div className='secciones'>
          <h1 className='principal'>
              Proyectos
            </h1>
        </div>
        <div className='ejemplos'>
          <section className='proy1'>
            <Proyecto name={"Sistema de reporte de incidencias"} images={datosProyecto}>
            </Proyecto>
          </section>
          <section className='proy2'>
            <Proyecto name={"Sistema de caja fuerte con SHA-256"} images={redesProyecto}>
            </Proyecto>
          </section>
        </div>
    </section>

    <section className="contacto">
      <div className='secciones'>
        <h1 className='principal'>
          Contacto
        </h1>
        </div>
      </section>

      <section className="prueba">
        <div className='secciones'>
        <h1 className='principal'>
          Prueba
        </h1>
        </div>
      </section>
    
    </div>
    
  )
};

export default Home;