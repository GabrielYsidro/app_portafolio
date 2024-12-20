import DegradeProps from "./Degrade.types";
import  {useEffect} from 'react';

export const Degrade : React.FC<DegradeProps> = ({children}) => {
    useEffect(() => {
        const degradado = document.querySelector('.degrade') as HTMLElement;
        
        const manejoMouse = (e : MouseEvent) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            degradado.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%,)`;
        };

        document.addEventListener('mousemove', manejoMouse);

        return () => {
            document.removeEventListener('mousemove', manejoMouse);
        }

    }, [])
    return (
        <div className="degrade">
        </div>
    )
}

export default Degrade;
