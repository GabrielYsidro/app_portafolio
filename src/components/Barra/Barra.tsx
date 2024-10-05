import Cuadro from '../Cuadro/Cuadro';
import BarraProps from './Barra.types';

export const Barra : React.FC<BarraProps> = () => {
  return (
    <div className="barra">
        <Cuadro>Home</Cuadro>
        <Cuadro>About</Cuadro>
        <Cuadro>Contact</Cuadro>
        <Cuadro>Project</Cuadro>
    </div>
  );
}

export default Barra;