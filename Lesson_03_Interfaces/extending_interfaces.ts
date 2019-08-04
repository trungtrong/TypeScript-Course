interface Animal {
  name: string;
  run: boolean; 
}

interface Rabbit extends Animal {
  food: string;
  // hi: string;
}
/*
let whiteRabbit: Rabbit = {
  food: 'Carrot',
  name: 'rabbit',
  run: true
}; */

///*
let whiteRabbit = <Rabbit>{};
whiteRabbit.food = 'carrot'; //*/
console.log(whiteRabbit.run);