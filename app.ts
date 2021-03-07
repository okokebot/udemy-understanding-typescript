


// const person: {
//   name: string;
//   age: number;
//   role: [number, string, string];
// } = {
//   name: 'yota',
//   age: 30,
//   role: [2, 'admin', 'editor'],
// }

// // person.role[1] = 20;
// console.log(person.role[1]);


function alb(a: number, cb: (a, b) => string) {
  // console.log(cb(a, 20));
  const added = cb(a, 20) + 10;
  return cb(a, 20);
}

function add(a: number, b: number): string {
  // return a + b;
  return "a + b";
}

console.log(alb(1, add));
console.log(30);
