'use strict'

module.exports = function( filename , done ){

    let patchLength = 2

    let fs = require( 'fs' )
    let PNG = require( 'pngjs' ).PNG

    fs.createReadStream( filename )
        .pipe( new PNG({ filterType: 4 }) )
        .on( 'parsed' , function(){

            for (let y = 0; y < this.height; y++) {
                for (let x = 0; x < this.width; x++) {

                    let idx = (this.width * y + x) << 2;

                    if( ( x >= 1 && x <= patchLength && y == 0 ) 
                        || ( x > this.width - 2 - patchLength && x <= this.width - 2 && y == 0 )
                        || ( x == 0 && y >= 1 && y <= patchLength )
                        || ( x == 0 && y > this.height - 2 - patchLength && y <= this.height - 2 ) ){

                            // draw 1px black lines around the corners
                            this.data[idx] = 0
                            this.data[idx+1] = 0
                            this.data[idx+2] = 0
                            this.data[idx+3] = 255

                        } else if ( x == 0
                                    || x == this.width - 1
                                    || y == 0
                                    || y == this.height - 1 ) {
                            
                            // draw transparent 1px frame
                            this.data[idx] = 0
                            this.data[idx+1] = 0
                            this.data[idx+2] = 0
                            this.data[idx+3] = 0

                        }

                }
            }

            this.pack().pipe(fs.createWriteStream( filename.replace( '.png' , '.9.png' )) ).on( 'close' , function(){

                done()
                
            });

        })

}

