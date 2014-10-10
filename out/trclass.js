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
  var $Monster = Monster;
  ($traceurRuntime.createClass)(Monster, {
    attack: function(target) {
      if (!(target instanceof $Monster)) {
        console.log(this.name, 'can not attack non-Monster');
        return;
      }
      console.log(this.name, 'attacks the', target.name, 'for', this.power);
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
    attack: function(target) {
      console.log(this.name, 'decimates for', this.strength + (this.power * 2));
    },
    defend: function() {
      $traceurRuntime.superCall(this, $SuperMonster.prototype, "defend", []);
      console.log(this.name, 'is temporarily impervious to damage');
    }
  }, {}, Monster);
  var Entity = function Entity(name) {
    this.name = name;
  };
  ($traceurRuntime.createClass)(Entity, {}, {});
  var tengu = new Monster('Tengu');
  var daimyo = new SuperMonster('Major Daimyo');
  var rect = new Entity('rectangle');
  tengu.attack(daimyo);
  tengu.attack(rect);
  tengu.defend();
  daimyo.attack();
  daimyo.defend();
  return {};
});
System.get("../src/class" + '');

//# sourceMappingURL=trclass.map
