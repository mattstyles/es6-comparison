function value( max ) {
    return ( Math.random() * max ) | 0;
}


class Monster {

    constructor( name ) {
        this.name = name;
        this.strength = value( 10 );
        this.force = value( 20 );
    }

    attack() {
        console.log( this.name, 'attacks for', this.power );
    }

    defend() {
        console.log( this.name, 'defends' );
    }

    get power() {
        return value( this.strength + this.force );
    }
}

class SuperMonster extends Monster {

    constructor( name ) {
        super( name );
        console.log( 'I feel a creature of great power has spawned' );
    }

    attack() {
        console.log( this.name, 'decimates for', value( this.strength * 2 ) );
    }

    defend() {
        super();
        console.log( this.name, 'is temporarily impervious to damage' );
    }
}


var tengu = new Monster( 'Tengu' );

tengu.attack();
tengu.defend();

var daimyo = new SuperMonster( 'Major Daimyo' );

daimyo.attack();
daimyo.defend();
