import React from 'react'

export interface Imagenes {
    src: string,
    alt : string
}

export interface ProyectoProps {
    children?: React.ReactNode;
    name : string;
    images : Imagenes[];
}

export default ProyectoProps;