// Cuadro.tsx
import React from 'react';
import { CuadroProps } from './Cuadro.types';
import Link from 'next/link';
import {usePath} from '../../hooks/usePath';


const Cuadro: React.FC<CuadroProps> = ({ children }) => {
    const path = usePath(children);

    return(
        <Link href={path}>
            <div className="cuadro">
                <span>{children}</span>
            </div>
        </Link>
        ) 
};

export default Cuadro;