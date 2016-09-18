'use strict'

// action( item , index , list , done )
module.exports = function( list , action , done ){

    let currentIndex = -1;

    function innerLoop(){

        currentIndex++

        if( currentIndex >= list.length ){
            done()
        
        } else {
            action( list[currentIndex] , currentIndex , list , innerLoop )

        }

    }

    innerLoop()


}