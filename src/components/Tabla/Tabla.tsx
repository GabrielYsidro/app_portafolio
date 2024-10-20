
import TablaProps from "./Tabla.types";
import {useState} from 'react';
import Image from 'next/image';

export const Tabla: React.FC<TablaProps> = ({ children, ancho, largo }) => {
    const [tabla,setTabla] = useState(Array.from({ length: ancho }, () => Array(largo).fill(false)));
    const urls = [['/django.svg','/java.svg','/javascript.svg','/postgre.svg'],
    ['/python.svg','/react.svg','/spring.svg','/node.svg']];
    return(
        <div className="tabla">
        {
            tabla.map((fila, i) => (
                <div className="fila" key={i}>
                {
                    fila.map((columna, j) => (
                        <div className="columna" key={j}>
                            <Image src={urls[j][i]} alt='No se encuentra' width={100} height={75} ></Image>
                        </div>
                    ))
                }
                </div>
            ))
        }
        </div>
    )
}

export default Tabla;
