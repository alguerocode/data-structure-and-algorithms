

// reverse the number || or return 0 if the number bigger thean 64bit;

const reverse = function(x) {
  const tempNum = x;
  x = Math.abs(x);
  let strNum = '';
  while(x >= 10) {
      strNum += x % 10;
      x = Math.floor(x / 10);
  }
  strNum += x;
  if(tempNum > 0) {
      return parseInt(strNum);
  }
  return parseInt(strNum) * -1;
};
console.log(reverse(-12345));