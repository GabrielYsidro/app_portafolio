import Image from 'next/image';
import Link from 'next/link';
import Tabla from '../components/Tabla/Tabla';
import Proyecto from '../components/Proyecto/Proyecto'

export const Home = () => {
  return(
    <div>
      <section className="presentacion">
        <div className="contenido">
          <div className="izquierda">
            <div className="titulo">
              <h1>Hola! Me llamo</h1>
              <h1>Gabriel Ysidro<span className="cursor"></span></h1>
            </div>
            <div className="imagen">
              <a target="_blank" href="https://www.linkedin.com/in/gawayspa">
              <Image src="/Gabo.jpeg" alt="Descripción de la imagen" width={300} height={200} />
              </a>
            </div>
          </div>
          <div className="derecha">
            <p>Soy un estudiante de Ingenieria de Sistemas en la Universidad de Lima.
              Actualmente, me desempeño como Desarrollador Fullstack.
              Trabajo con tecnologías como React y Next.js para el frontend,
              así como PostgreSQL y Express.js para el backend.
              Me gusta innovar con soluciones creativas y 
              obtener resultados de calidad.
            </p>
          </div>
        </div>
      </section>

    <section className="tecnologias">
        <h1 className='principal'>
          Tecnologias
        </h1>
        <div className='iconos'>
          <Tabla ancho={4} largo={2}/>
        </div>
    </section>

    <section className="proyectos">
        <h1 className='principal'>
          Proyectos
        </h1>
        <Proyecto name={"Sistema de reporte de incidencias"}>

        </Proyecto>
    </section>

    <section className="contacto">
        <h1 className='principal'>
          Contacto
        </h1>
      </section>

      <section className="prueba">
        <h1 className='principal'>
          Prueba
        </h1>
      </section>
    
    </div>
    
  )
};

export default Home;