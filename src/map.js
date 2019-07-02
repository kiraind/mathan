/**
 * Maps value from one range to another
 * @param {number} x What to map
 * @param {Range} original
 * @param {Range} target
 * @return {number}
 */
function map(x, original, target) {
    const part = (x - original.from) / original.width
    
    return part * target.width + target.from
}

module.exports = map