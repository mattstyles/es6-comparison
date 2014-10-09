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



var tengu = new Monster( 'Tengu' );

tengu.attack();

var daimyo = new SuperMonster( 'Major Daimyo' );

daimyo.attack();

