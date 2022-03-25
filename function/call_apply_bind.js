Function.prototype.myCall = function (thisArg, ...args) {
  if (thisArg === undefined || thisArg === null) {
    return this(...args);
  }
  if (typeof thisArg !== 'object') {
    thisArg = Object(thisArg);
  }
  const key = Symbol('call');
  thisArg[key] = this;
  const result = thisArg[key](...args);
  delete thisArg[key];
  return result;
}

const a = 1

const obj = {
  a: 2,
  foo() {
    console.log(this.a);
  }
}

function foo() {
  console.log(this.a);
}

foo.myCall(obj);
