function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const response = [];
    let counter = 0;
    promises.forEach((promise, i) => {
      promise
        .then((data) => {
          response[i] = data;
          counter++;
          if(counter == promise.length) {
              resolve(response);
          }
        })
        .catch(reject);
    });
  });
}

const res = promiseAll([Promise.resolve(3), Promise.reject("hello"), Promise.resolve(322)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
