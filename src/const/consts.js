
export const datosProyecto = [...Array(7)].map((_,i) => ({
    src : `/pruebaDatos/imgDatos${i+1}.png`, alt: `ImagenDatos${i+1} none`
}))

export const redesProyecto = [...Array(3)].map((_,i) => ({
    src : `/pruebaRedes/imgRedes${i+1}.png`, alt : `ImagenRedes${i+1} none`
}))

export default datosProyecto;



