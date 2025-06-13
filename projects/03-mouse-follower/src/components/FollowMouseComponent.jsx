// js
// react
import { useState, useEffect } from "react";
// third
// own

export const FollowMouseComponent = () => {
    const [enabled, setEnabled] = useState(false);

    const [position, setPosition] = useState({x: 0, y: 0});

    const handleClick = () => {
        setEnabled(!enabled);
    }

    // pointer move.
    useEffect(() => {
        // console.log('effect -> ', {enabled});
        const handleMove = (event) => {
            const {clientX, clientY} = event;
            // console.log('handleMove', {clientX, clientY});
            setPosition({x: clientX, y: clientY});
        }
        if (enabled) {
            window.addEventListener('pointermove', handleMove);
        }
        // cleanup:
        // -> cuando el componente se desmonta.
        // -> cuando cambian las dependencias, antes de ejecutar
        //    el efecto de nuevo
        return () => { // cleanup method.
            // console.log('🧹 Limpieza');
            window.removeEventListener('pointermove', handleMove);
        }
    }, [enabled]);

    // [] -> solo se ejecuta una vez cuando se renderiza el componente
    // [enabled] -> se ejecuta cuando cambia enabled y cuando se renderiza el componente
    // undefined -> se ejecuta cada vez que se renderiza el componente

    // change body className.
    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled);

        return () => {
            document.body.classList.remove('no-cursor');
        }
    }, [enabled]);

    return (
        <>
            <div style={{
                display: `${enabled ? 'block' : 'none'}`,
                position: 'absolute',
                backgroundColor: '#0005',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: '0.8',
                pointerEvents: 'none',
                top: -30,
                left: -30,
                width: 60,
                height: 60,
                transform: `translate(${position.x}px, ${position.y}px)`
            }} />
            <button onClick={handleClick}>
                {
                enabled
                    ? 'Unenable Follow Pointer'
                    : 'Enable Follow Pointer'
                }
            </button>
        </>
    );
}