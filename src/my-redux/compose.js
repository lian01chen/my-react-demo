function compose(...funs) {
  return funs.reduce((a, b) => (...args) => a(b(...args)))
}



function add1(a) {
  return a + 1;
}

function add2(b) {
  return b + 2;
}

function add3(c) {
  return c + 3;
}

compose(add1, add2, add3)();