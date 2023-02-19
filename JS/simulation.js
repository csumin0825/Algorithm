const INPUT = "6\nR L L R U D D D U R";

const N = Number(INPUT.split("\n")[0]);
const PLAN = INPUT.split("\n")[1].split(" ");

let x = 1;
let y = 1;

for (let i = 0; i < PLAN.length; i++) {
  let move = [0, 0];
  switch (PLAN[i]) {
    case "L":
      move[1] = -1;
      break;
    case "R":
      move[1] = 1;
      break;
    case "U":
      move[0] = -1;
      break;
    case "D":
      move[0] = 1;
      break;
  }
  x += move[0];
  y += move[1];
  if (x < 1 || y < 1 || x > N || y > N) {
    x -= move[0];
    y -= move[1];
  }
}
console.log(x, y);
