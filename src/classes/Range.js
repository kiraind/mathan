/**
 * Class representing range of numbers 
 */
class Range {
    /**
     * 
     * @param {number} a 
     * @param {number} b 
     * @param {boolean} includeFrom 
     * @param {boolean} includeTo 
     */
    constructor(a, b, includeA=false, includeB=false,) {
        if(a <= b) {
            this.from = a
            this.to = b

            this.includeFrom = includeA
            this.includeTo = includeB
        } else {
            this.from = b
            this.to = a

            this.includeFrom = includeB
            this.includeTo = includeA
        }
    }

    /**
     * Checks if argument is inside range
     * @param {number} x 
     * @return {boolean}
     */
    contains(x) {
        return (
            ( x > this.from && x < this.to ) ||
            ( this.includeFrom && (x === this.from) ) ||
            ( this.includeTo   && (x === this.to) )
        )
    }

    /**
     * Width of the range
     * @return {number}
     */
    get width() {
        return this.to - this.from
    }
}

module.exports = Range