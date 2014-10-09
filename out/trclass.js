System.register("../src/class", [], function() {
  "use strict";
  var __moduleName = "../src/class";
  function value(max) {
    return (Math.random() * max) | 0;
  }
  var Monster = function Monster(name) {
    this.name = name;
    this.strength = value(10);
    this.force = value(20);
  };
  ($traceurRuntime.createClass)(Monster, {
    attack: function() {
      console.log(this.name, 'attacks for', this.power);
    },
    defend: function() {
      console.log(this.name, 'defends');
    },
    get power() {
      return value(this.strength + this.force);
    }
  }, {});
  var SuperMonster = function SuperMonster(name) {
    $traceurRuntime.superCall(this, $SuperMonster.prototype, "constructor", [name]);
    console.log('I feel a creature of great power has spawned');
  };
  var $SuperMonster = SuperMonster;
  ($traceurRuntime.createClass)(SuperMonster, {
    attack: function() {
      console.log(this.name, 'decimates for', value(this.strength * 2));
    },
    defend: function() {
      $traceurRuntime.superCall(this, $SuperMonster.prototype, "defend", []);
      console.log(this.name, 'is temporarily impervious to damage');
    }
  }, {}, Monster);
  var tengu = new Monster('Tengu');
  tengu.attack();
  tengu.defend();
  var daimyo = new SuperMonster('Major Daimyo');
  daimyo.attack();
  daimyo.defend();
  return {};
});
System.get("../src/class" + '');
