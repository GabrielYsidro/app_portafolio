import Image from 'next/image';


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
              <Image src="/toxan.png" alt="Descripción de la imagen" width={200} height={200} />
            </div>
          </div>
          <div className="derecha">
            <p>Soy un estudiante de ingenieria de Sistemas en la Universidad de Lima.
              Actualmente, me desempeño como desarrollador fullstack.
              Trabajo con tecnologías como React y Next.js para el frontend,
              así como PostgreSQL y Express.js para el backend.
              Me gusta innovar con soluciones creativas y 
              obtener resultados de calidad.
            </p>
          </div>
        </div>
      </section>

    <section className="tecnologias">
        <h1>
          Tecnologias
        </h1>
    </section>

    <section className="proyectos">
        <h1>
          Proyectos
        </h1>
    </section>

    <section className="contacto">
        <h1>
          Contacto
        </h1>
      </section>

      <section className="prueba">
        <h1>
          Prueba
        </h1>
      </section>
    
    </div>
    
  )
};

export default Home;