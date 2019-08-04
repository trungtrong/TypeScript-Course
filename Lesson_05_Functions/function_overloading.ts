function padding(all: number);

function padding(a: number, b: number);

function padding(a: number, b?: number, c?: number, d?: number);

function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a;
  }
  else if (c === undefined && d === undefined) {
      c = a;
      d = b;
  }
  return {
      top: a,
      right: b,
      bottom: c,
      left: d
  };
}

padding(1);
padding(1, 1);
padding(1, 2, 3, 4);

let sayHi = (x: number): number => { return x};
console.log(sayHi(1));