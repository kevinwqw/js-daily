/**
 *
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 */
const debounce = (fn, delay) => {
    let timeout = null;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
