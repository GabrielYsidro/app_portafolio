// Cuadro.tsx
import React from 'react';
import { CuadroProps } from './Cuadro.types';
import Link from 'next/link';
import {usePath} from '../../hooks/usePath';


const Cuadro: React.FC<CuadroProps> = ({ children }) => {
    const path = usePath(children);

    return(
        <div className="cuadro">
            <Link href={path}>
            {children}
            </Link>
        </div>
        ) 
};

export default Cuadro;