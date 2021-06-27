

// reverse the number || or return 0 if the number bigger thean 64bit;

const reverse = function(x) {
  const isPositive = x >= 0;
  x = Math.abs(x);
  let strNum = '';
  while(x >= 10) {
      strNum += x % 10;
      x = Math.floor(x / 10);
  }
  strNum += x;
  if(isPositive) {
      return parseInt(strNum);
  }
  return parseInt(strNum) * -1;
};
console.log(reverse(-12345));
console.log(reverse(2352));


