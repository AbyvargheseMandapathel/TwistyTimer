const moves = ["U", "D", "F", "B", "R", "L"];
const modifiers = ["", "'", "2"];

export const generateScramble = () => {
  let scramble = [];
  let prevMove = "";
  for (let i = 0; scramble.length < 20; i++) {
    let move = moves[Math.floor(Math.random() * moves.length)];
    if (move[0] !== prevMove[0]) {
      let modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
      scramble.push(move + modifier);
      prevMove = move;
    }
  }
  return scramble.join(" ");
};