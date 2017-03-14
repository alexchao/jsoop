/**
 * Various OOP styles I've encountered in JS.
 */

/**
 * Prototypal
 *
 * - Constructor function has no return value
 * - Private members are possible but not straightforward
 * - Creating objects requires `new` keyword, e.g.:
 *
 *      let r = new Rectangle();
 */
const Prototypal = (function() {

    function Shape() {
        this.x = 0;
        this.y = 0;
    }

    Shape.prototype.move = function(dx, dy) {
        this.x += dx;
        this.y += dy;
    };

    function Rectangle() {
        Shape.call(this);
    }

    /**
     * Inheritance happens here.
     * Equivalent to `= Object.create(Shape.prototype)`.
     */
    Rectangle.prototype = new Shape();

    /**
     * Without this line, the constructor would be Shape, which could work,
     * but sometimes we have some extra behavior to add in the inheriting
     * object's constructor.
     */
    Rectangle.prototype.constructor = Rectangle;

    return {};

})();


const Constructor = (function() {

    /* Object Constructor */

})();


/* ES6 Class */
