function sleep(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  })
}

async function fn1(ctx, next) {
  console.log('1 before');
  await next();
  console.log('1 after');
}

async function fn2(ctx, next) {
  console.log('2 before');
  await sleep()
  await next();
  console.log('2 after');
}

async function fn3(ctx, next) {
  console.log('3 before');
  await sleep()
  await next();
  console.log('3 after');
}

function compose(fns) {
  return function (ctx) {
    function dispatch(index) {
      const fn = fns[index];
      if (!fn) {
        return Promise.resolve()
      }
      const next = () => {
        return dispatch(index + 1);
      }
      return Promise.resolve(fn(ctx, next));
    }
    return dispatch(0);
  }
}

compose([fn1, fn2, fn3])(111)