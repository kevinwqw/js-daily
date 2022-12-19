/**
 *
 * @param {Function} fn
 * @param  {Array} args
 * @returns
 */

function newMethod(fn, ...args) {
    const obj = {};
    obj.__proto__ = fn.prototype;
    fn.apply(obj, args);
    return obj;
}
