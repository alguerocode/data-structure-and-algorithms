function deepEquals(value1, value2) {
  // define the type of the value1 , value2
  const [valueType1, valueType2] = [...arguments].map((value) => {

    const typeOfValue = typeof value;

    if (typeOfValue == "object") {

      if (Array.isArray(value)) return "array";
      
      if (value == null) return "null";
    }

    return typeOfValue;
  });

  // check if the same type
  if (valueType1 !== valueType2)  return false;
  

  if (valueType1 == "object") {
    const value1Keys = Object.keys(value1);
    const value2Keys = Object.keys(value2);

    if (value1Keys.length != value2Keys.length) return false;
    
    const isEqual = value1Keys.every((key) => {
      return value2Keys.includes(key) && deepEquals(value1[key], value2[key]);
    });

    return isEqual;
  }

  if (valueType1 == "array") {

    if (value1.length !== value2.length) return false;

    const isEqual = value1.every((v, index) => deepEquals(value1[index], value2[index]));
    return isEqual;
  }

  return value1 === value2;
}

console.log(deepEquals([{ d: { welcome: [1, 1] } }], [{ d: { welcome: [1, 1] } }])); // true
console.log(deepEquals([{ d: { welcome: [1, 1] } }], [{ d: { welcome: [1, 2] } }])); // false
