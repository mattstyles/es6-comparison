function value( max ) {
    return ( Math.random() * max ) | 0;
}


class Monster {

    constructor( name ) {
        this.name = name;
        this.strength = value( 10 );
        this.force = value( 20 );
    }

    attack( target ) {
        if ( !( target instanceof Monster ) ) {
            console.log( this.name, 'can not attack non-Monster' );
            return;
        }
        
        console.log( this.name, 'attacks the', target.name,'for', this.power );
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

    attack( target ) {
        console.log( this.name, 'decimates for', this.strength + ( this.power * 2 ) );
    }

    defend() {
        super();
        console.log( this.name, 'is temporarily impervious to damage' );
    }
}

class Entity {
    constructor( name ) {
        this.name = name;
    }
}


var tengu = new Monster( 'Tengu' );
var daimyo = new SuperMonster( 'Major Daimyo' );
var rect = new Entity( 'rectangle' );

tengu.attack( daimyo );
tengu.attack( rect );
tengu.defend();

daimyo.attack();
daimyo.defend();
