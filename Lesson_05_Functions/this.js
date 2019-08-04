///*
var obj = {
    fname: 'Trong',
    surname: 'Ngo',
    print: function () {
        var _this = this;
        return function () {
            console.log(_this.fname);
        };
    }
};
obj.print()(); //*/
/*
interface Info {
  fname: string;
  surname: string;
  print(this: Info): any;
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

obj.print()(); */ 
