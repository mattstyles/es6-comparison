System.register("../src/modules/random", [], function() {
  "use strict";
  var __moduleName = "../src/modules/random";
  function rand(max) {
    return (Math.random() * max) | 0;
  }
  ;
  return {get rand() {
      return rand;
    }};
});
System.register("../src/module", [], function() {
  "use strict";
  var __moduleName = "../src/module";
  var rand = System.get("../src/modules/random").rand;
  function modTest(str) {
    console.log('From mod test function, ha ha, I\'m not really global!\n', str);
  }
  function moduleTest(times, max) {
    for (var x = 0; x < times; x++) {
      console.log(rand(max));
    }
  }
  modTest('hello from module');
  return {get moduleTest() {
      return moduleTest;
    }};
});
System.get("../src/module" + '');

//# sourceMappingURL=trmodule.map
