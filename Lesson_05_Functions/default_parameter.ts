function foo(bar: string, bas = 'bye') {
  console.log(bar, bas);
}

foo('hello', undefined);