var co = require('co');
var sayhello = function (name, ms) {
  setTimeout(function (name,ms) {
    console.log(name);
  }, ms);
}
var gen = function* () {
  yield sayhello("xiaomi", 2000);
  console.log('frist');
  yield sayhello("huawei", 1000);
  console.log('second');
  yield sayhello("apple", 500);
  console.log('end');
}
co(gen());
