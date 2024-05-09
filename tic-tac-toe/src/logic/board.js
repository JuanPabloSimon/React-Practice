import { WINNER_COMB } from '../assets/constants'

export const checkWinnerFrom     = (boardToCheck) => {
    for (const combo of WINNER_COMB) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c] 
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
}

export const checkEndBoard = (boardToCheck) => {
    // Chequear si todos los espacios del tableros son distintos a null
    return boardToCheck.every((square) => square !== null) // x u o
}
