// js
// react
// third
// own
import { SquareComponent } from "./SquareComponent";

export const WinnerModalComponent = ({winner, resetGame}) => {
    // juego en proceso.
    if (winner === null) return null;
    // validar si se gano o no.
    const winnerText = winner === false ? 'Empate' : 'Ganó';

    return (
        <section className='winner'>
        <div className='text'>
            <h2>
            {winnerText}
            </h2>
            <header className='win'>
            {
                winner && <SquareComponent>{winner}</SquareComponent>
            }
            </header>
            <footer>
            <button onClick={resetGame}>Reset Game</button>
            </footer>
        </div>
        </section>
    )
}