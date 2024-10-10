
import TablaProps from "./Tabla.types";
import {useState} from 'react';

export const Tabla = ({children}: TablaProps, {ancho}: TablaProps, {largo} : TablaProps) => {
    const [tabla,setTabla] = useState(Array(2).fill(0).map(() => Array(4).fill(0)));

    return(
        <div>
        <h1>Tabla</h1>
        </div>
    )
}
