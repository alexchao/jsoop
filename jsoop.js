/**
 * Various OOP styles I've encountered in JS.
 *
 * Modules here are just to keep things neat.
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

    return {
        Shape: Shape,
        Rectangle: Rectangle
    };

})();


/**
 * Object Constructor
 * - no usage of `this` at all
 * - private members are just constructor function local variables. their
 *   values are preserved as state by the closure created on the function
 *   call.
 * - constructor function works like a factory function. no `new` usage.
 * - polymorphism achieved through composition(?)
 */
const Constructor = (function() {

    const Shape = function() {
        let x = 0;
        let y = 0;

        const move = function(dx, dy) {
            x += dx;
            y += dy;
        };

        return { move: move };
    };

    const Rectangle = function() {
        const otherStuff = { /* other behavior */ };
        return Object.assign(Shape(), otherStuff);
    };

    return { Shape: Shape };

})();


/* ES6 Class */
