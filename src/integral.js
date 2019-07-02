/**
 * Higher-order function converting numerical function to it's integral using Riemann sum
 * @param {function(number) : number} f Numerical function to integrate
 * @param {number} sections Number of sections to divide range into. More means better precision but lower performance.
 * @return {function(number) : number}
 */
function integral(f, sections=1e5) {
    return x => {
        const a = 0
        const b = x

        const dx = (b - a) / sections

        let sum = 0
        let current_x = a
        while(current_x < b) {
            sum += f(current_x) * dx
            current_x += dx
        }

        return sum
    }
}

module.exports = integral