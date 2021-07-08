function romanToInt(s) {

  let result = 0;
  const romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  for (let i = 0; i < s.length; i++) {

    if (romanNum[s[i]] < romanNum[s[i + 1]]) {

      let innerNum = romanNum[s[i]];

      for (let j = i; j < s.length; j++) {

        if (romanNum[s[j]] < romanNum[s[j + 1]]) {

          innerNum = romanNum[s[j + 1]] - innerNum;
          i++;

        } else {

          result += innerNum;
          break;

        }
      }
    } else {

      result += romanNum[s[i]];
    }
  }
  return result;
};
console.log(romanToInt("MCMXCIV"));
