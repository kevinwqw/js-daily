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

/**
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 */
function throttlePro(fn, delay) {
    let shouldwait = false;
    let remainArgs = null;

    const timeoutFunc = () => {
        if (remainArgs) {
            fn(remainArgs);
            remainArgs = null;
            setTimeout(timeoutFunc, delay);
        } else {
            shouldwait = false;
        }
    };

    return (...args) => {
        if (shouldwait) {
            remainArgs = args;
            return;
        }
        fn(...args);
        shouldwait = true;

        setTimeout(timeoutFunc, delay);
    };
}
