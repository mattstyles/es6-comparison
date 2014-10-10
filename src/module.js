
import { rand } from './modules/random';


function modTest( str ) {
    console.log( 'From mod test function, ha ha, I\'m not really global!\n', str );
}


export function moduleTest( times, max ) {
    for ( var x = 0; x < times; x++ ) {
        console.log( rand( max ) );
    }
}

modTest( 'hello from module' );
