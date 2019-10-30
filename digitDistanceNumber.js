/*
For n = 2744, the output should be
digitDistanceNumber(n) = 530.

b1 = |a2 - a1| = |7 - 2| = 5
b2 = |a3 - a2| = |4 - 7| = 3
b3 = |a4 - a3| = |4 - 4| = 0
For n = 330, the output should be
digitDistanceNumber(n) = 3.

For n = 333, the output should be
digitDistanceNumber(n) = 0.


*/

function digitDistanceNumber(n) {
   12345
   var individualNumArray = n.toString().split('');
   var result = '';
   for(var i=0 ; i<individualNumArray.length-1; i++){
       debugger;
       var num = individualNumArray[i];
       var nextNum = individualNumArray[i+1];
       result += Math.abs(num - nextNum);
   }
   return Number(result);
}
