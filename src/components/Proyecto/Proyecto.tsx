import ProyectoProps from './Proyecto.types'
import Image from "next/image"
import React from 'react'
import Slider from 'react-slick';


export const Proyecto : React.FC<ProyectoProps> = ({name, images}) => {
    const config =  {
        dots : true,
        infinite : true,
        speed: 300,
        slidesToShow : 1,
        slidesToScroll : 1
    }

    return (
        <div className='proyecto'>
            <div className="titulo">
                {name}
            </div>
            <div className='slider-container'>
                <Slider {...config}>
                    {images.map((image,index) => (
                        <div key={index} style={{ position: "relative", height: "400px" }}>
                            <Image className='img-slider' src={image.src}
                            alt={image.alt}
                            width={700}
                            height={550}
                            priority={index === 0}></Image>
                        </div>
                    ))}
                </Slider>
            </div>
            
        </div>
    )
}

export default Proyecto;



