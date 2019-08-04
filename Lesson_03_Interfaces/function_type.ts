//        Function Type
/*
interface SearchFunc {
  (source: string, susbString: string) : boolean;
}

let mySearch : SearchFunc;
mySearch = function(source: string, susbString: string) {
  let result = source.search(susbString);
  return result > -1;
}

console.log(mySearch('abc', 'c')); */
// Ex2:
interface KeyValue {
  (key: number, value: string) : void;
};

function addKeyValue(key: number, value: string): void {
  console.log(`addKeyValue= ${key} + and ${value}`);
}

function updateKeyValue(key: number, value: string): void {
  console.log(`updateKeyValue= ${key} + and ${value}`);
}

let kvp: KeyValue = addKeyValue;
kvp(1, "Bill");

// update
kvp = updateKeyValue;
kvp(2, 'Steve');
