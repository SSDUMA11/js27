function UserType (name) {
    let arr = [];
    for(let i = 0; i < name.length; ++i){
      arr[i] = name[i];
      if (i + 1 == name.length){
        Object.defineProperty (arr, 'longitude', {
          enumerable: true,
          writable: false,
          configurable: true,
          value: i + 1,
        });
      }
    }
    Object.setPrototypeOf(arr, Array.prototype);
    return arr;
  }
  
let admins = new UserType (['Mike', 'Bob', 'Nikola']);
console.log(admins.join('; '));