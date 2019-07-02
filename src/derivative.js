/**
 * Higher-order function converting numerical function to it's derivative
 * @param {function(number) : number} f Numerical function to differentiate
 * @param {number} epsilon Value used as ε->0, less is more precise, but too low results in high float-errors
 * @return {function(number) : number}
 */
function derivative(f, epsilon=1e-5) {
    return x => {
        const dx = epsilon
        const df = f(x + dx) - f(x)

        return df / dx
    }
}

module.exports = derivative
