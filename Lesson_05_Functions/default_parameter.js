function foo(bar, bas) {
    if (bas === void 0) { bas = 'bye'; }
    console.log(bar, bas);
}
foo('hello', undefined);
