function value( max ) {
    return ( Math.random() * max ) | 0;
}




    function Monster(name)  {"use strict";
        this.name = name;
        this.strength = value( 10 );
        this.force = value( 20 );
    }

    Monster.prototype.attack=function() {"use strict";
        console.log( this.name, 'attacks for', this.power );
    };

    Monster.prototype.defend=function() {"use strict";
        console.log( this.name, 'defends' );
    };

    Object.defineProperty(Monster.prototype,"power",{enumerable:true,configurable:true,get:function() {"use strict";
        return value( this.strength + this.force );
    }});


for(var Monster____Key in Monster){if(Monster.hasOwnProperty(Monster____Key)){SuperMonster[Monster____Key]=Monster[Monster____Key];}}var ____SuperProtoOfMonster=Monster===null?null:Monster.prototype;SuperMonster.prototype=Object.create(____SuperProtoOfMonster);SuperMonster.prototype.constructor=SuperMonster;SuperMonster.__superConstructor__=Monster;

    function SuperMonster(name)  {"use strict";
        Monster.call(this, name );
        console.log( 'I feel a creature of great power has spawned' );
    }

    SuperMonster.prototype.attack=function() {"use strict";
        console.log( this.name, 'decimates for', value( this.strength * 2 ) );
    };

    SuperMonster.prototype.defend=function() {"use strict";
        ____SuperProtoOfMonster.defend.call(this);
        console.log( this.name, 'is temporarily impervious to damage' );
    };



var tengu = new Monster( 'Tengu' );

tengu.attack();
tengu.defend();

var daimyo = new SuperMonster( 'Major Daimyo' );

daimyo.attack();
daimyo.defend();

