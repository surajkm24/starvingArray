const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// let result = words.filter(word => word[0] == 'e' || word[word.length - 1] == 't');

// console.log(result);

let filter = (arr) => {
   for(let i of arr) {
      if(i[0] == 'e' || i[i.length - 1] == 't') {
         console.log(i);
      }
   }
}

filter(words);

for(let i=1; i<=5; i++) {

   // (i%2 == 0) ? console.log(`${i} is even. `) : console.log(`${i} is odd. `);

   if(i%2 == 0) {
      console.log(`${i} is even. `);
   }
   else {
      console.log(`${i} is odd. `);
   }

}
