function value(max) {
  return (Math.random() * max) | 0;
}
var Monster = function Monster(name) {
  "use strict";
  this.name = name;
  this.strength = value(10);
  this.force = value(20);
};
($traceurRuntime.createClass)(Monster, {
  attack: function() {
    "use strict";
    console.log(this.name, 'attacks for', this.power);
  },
  get power() {
    "use strict";
    return value(this.strength + this.force);
  }
}, {});
var SuperMonster = function SuperMonster(name) {
  "use strict";
  $traceurRuntime.superCall(this, $SuperMonster.prototype, "constructor", [name]);
  console.log('I feel a creature of great power has spawned');
};
var $SuperMonster = SuperMonster;
($traceurRuntime.createClass)(SuperMonster, {attack: function() {
    "use strict";
    console.log(this.name, 'decimates for', value(this.strength * 2));
  }}, {}, Monster);
var tengu = new Monster('Tengu');
tengu.attack();
var daimyo = new SuperMonster('Major Daimyo');
daimyo.attack();
