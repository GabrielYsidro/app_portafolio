import ProyectoProps from './Proyecto.types'

export const Proyecto : React.FC<ProyectoProps> = ({name}) => {
    return (
        <div className='proyecto'>
            <section className='titulo'>
                {name}
            </section>
            
        </div>
    )
}

export default Proyecto;



