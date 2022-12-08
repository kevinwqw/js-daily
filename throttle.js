/**
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 */

const throttle = (fn, delay) => {
    let shouldWait = false;
    return (...args) => {
        if (shouldWait) return;
        fn(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);
    };
};
