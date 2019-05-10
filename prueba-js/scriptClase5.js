// class Counter {
//   constructor(startValue) {
//     this.value = startValue;
//   }

//   getValue() {
//     return `El value es ${this.value}`;
//   }

//   incrementValue() {
//     this.value++;
//   }

//   decrementValue() {
//     this.value--;
//   }
// }

// const newCounter = new Counter(0);
// console.log(newCounter.getValue());

// newCounter.incrementValue();
// console.log(newCounter.getValue());


// const perroVerde = new Counter(100);
// console.log(perroVerde.getValue());

// perroVerde.incrementValue();
// console.log(perroVerde.getValue());


// console.log(123, newCounter.value); 


const arr = ['juani', 'dami', 'courseIT'];

const pos = arr.indexOf('juani');
if (arr > -1) {
  arr.splice(pos, 1)
} else {
  console.log('juani no esta en el array')
}