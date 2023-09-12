let car = {
  name : '소나타',
  ph : 300,
  start : () => {
    console.log('engine start');
  },
  stop : () => {
    console.log('engine stop');
  }
};

console.log(car.name);
car.start();
