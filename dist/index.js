/** @license Apache-2.0 */

'use strict';

/**
* Create an iterator which generates a nonnegative integer sequence.
*
* @module @stdlib/math-iter-sequences-nonnegative-integers
*
* @example
* var iterNonNegativeIntegersSeq = require( '@stdlib/math-iter-sequences-nonnegative-integers' );
*
* var iter = iterNonNegativeIntegersSeq();
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
