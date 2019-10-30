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