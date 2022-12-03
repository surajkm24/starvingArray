// old method of creating object --------->

let obj = {
   name: 'Md Mostafijur Rahman',
   city: 'Kaliachak',
   printCity: function () {
      return this.city;
   }
};

// console.log(obj.printCity());

// [classes] - 'classes' are a template for creating objects --------->

class Student {
   constructor(name, city) {
      this.name = name;
      this.city = city;
   }

   welcome() {
      return `Welcome ${this.name} from ${this.city}. `
   }
}

let Student1 = new Student('Md Mostafijur Rahman', 'Kaliachak');
let Student2 = new Student('Md Nazibur Rahman', 'Malda');

// console.log(Student1.welcome());
// console.log(Student2);

class Rectangle {
   constructor(length, breadth) {
      this.length = length;
      this.breadth = breadth;
   }

   area() {
      return this.length * this.breadth;
   }

   totalPrice(price) {
      return (this.breadth * this.length) * price;
   }
}

let rect = new Rectangle(5, 4);

// console.log(rect.area());
// console.log(rect.totalPrice(1000));

class ourArray {
   constructor() {
      this.arr = [];
      this.length = 0;
   }

   isEmpty() {
      if(this.length == 0) return true;
      else return false;
   }

   push(value) {
      this.arr[this.length] = value;
      this.length++;
   }
}

let arr = new ourArray();

arr.push(7);
arr.push(9);

// console.log(arr);