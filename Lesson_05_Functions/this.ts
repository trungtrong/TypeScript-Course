/*
let obj = {
  fname: 'Trong',
  surname: 'Ngo',
  print: function() {
    return () => {
      console.log(this.fname);
    }
  }
}

obj.print()(); */

// /*
interface Info {
  fname: string;
  surname: string;
  print(this: Info);
}

let obj: Info = {
  fname: 'Trong',
  surname: 'Ngo',
  print: function(this: Info) {
    return () => {
      console.log(this.fname);
    }
  }
}

obj.print()(); //*/