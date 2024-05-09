import Square from "./Square";

// eslint-disable-next-line no-unused-vars, react/prop-types
const Board = ({ board, updateBoard }) => {
  return (
    <section className="game">
      {
        // eslint-disable-next-line react/prop-types
        board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })
      }
    </section>
  );
};

export default Board;
