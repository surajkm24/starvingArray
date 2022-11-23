
var str = 'masai';
str = str.split('');

var flag = true;
var i = 0;

while (i < str.length) {
   var temp = str.pop();
   if(str.includes(temp)) {
      flag = false;
      break;
   }
}

if(flag) console.log('Unique');
else console.log('No');

