class Something {
  static count = 0;
  constructor() {
    Something.count++;
  }
}

var s1 = new Something();
var s2 = new Something();
console.log(Something.count);