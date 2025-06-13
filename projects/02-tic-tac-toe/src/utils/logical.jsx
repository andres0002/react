// js
// react
// third
// own
import { WINNER_COMBOS } from "./constants";

// checkWinner.
export const checkWinner = (boardToCheck) => {
    // validate si X or O o uno de los dos gana.
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]) {
            // si hay ganador.
            return boardToCheck[a];
        }
    }
    // empate.
    if (!boardToCheck.includes(null)) {
        return false;
    }
    // si no hay ganador.
    return null;
}