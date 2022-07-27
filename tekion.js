var sample = {
  data: {
    name: 'Test',
    data: {
      name: 'Demo',
      data: {
        name: 'Hello',
        data: {},
      },
    },
  },
};

function customGet(src, path, defVal) {
  let dot = path.indexOf('.');
  if (src === undefined) {
    return defVal || undefined;
  }
  if (dot === -1) {
    if (path.length && path in src) {
      return src[path];
    }
    return defVal;
  }
  return customGet(src[path.substr(0, dot)], path.substr(dot + 1), defVal);
}

console.log('output', customGet(sample, 'data.data.name'));

//async await
function sleep(delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('Done');
    }, delay);
  });
}

async function test() {
  console.log('Hello!');
  await sleep(2000);
  console.log('World');
  await sleep(2000);
  console.log('Asyna');
}

test();
