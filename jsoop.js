/**
 * Various OOP styles I've encountered in JS.
 */
const JSOOP = (function() {

    /**
     * Prototypal
     *
     * - Constructor function has no return value
     * - Private members are possible but not straightforward
     */
    const PrototypalCounter = function(initialValue) {
        this._count = initialValue ? initialValue : 0;
    };

    PrototypalCounter.prototype.increment = function(delta) {
        let d = typeof delta === 'undefined' ? 1 : delta;
        this._count += delta;
    };

    PrototypalCounter.prototype.reset = function() { this._count = 0; };
    PrototypalCounter.prototype.getCount = function() { return this._count; };

    /* Object Constructor */

    /* ES6 Class */

    return {};

})();
