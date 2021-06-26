// complete in sometime

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.totalItems = 0;
  }
  _resize() {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = this._hashStringtoInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    })

    this.table = newTable;
  }
  _hashStringtoInt(str, tableSize) {
    let hash = 13;
    for (let i = 0; i < str.length; i++) {
      hash = (17 * hash * str.charCodeAt(i)) % tableSize;
    }
    return hash;
  }
  setItem(key, value) {
    const idx = this._hashStringtoInt(key, this.table.length);
    if (this.totalItems / this.table.length > 0.8) { // load factor
      this._resize();
    }
    if (this.table[idx]) {
      // if (this.table[idx].find(item => item[0] === key)) {
      //   return -1;
      // }
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
    this.totalItems++;
  }
  getItem(key) {
    try {
      const idx = this._hashStringtoInt(key, this.table.length);
      return this.table[idx].find(arr => arr[0] === key)[1];
    } catch (error) {
      return undefined;
    }
  }
}
const hashTable = new HashTable(3);
console.log('----------------- result ------------------')
hashTable.setItem('lastName', 'saif');
hashTable.setItem('bro', 'omar');
hashTable.setItem('welcome', 'ahmed');
hashTable.setItem('hello', 'welcome');
hashTable.setItem('email', 'alhashmi');
hashTable.setItem('password', 'nobody');



console.log(hashTable.getItem('email'))
console.log(hashTable.getItem('name'))
console.log(hashTable.getItem('welcome'))
console.log(hashTable.getItem('this'))


