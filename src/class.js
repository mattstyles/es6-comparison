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
}


var tengu = new Monster( 'Tengu' );

tengu.attack();

var daimyo = new SuperMonster( 'Major Daimyo' );

daimyo.attack();
