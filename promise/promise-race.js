/**
 *
 * @param {Array} promiseArr
 * @return {Array}
 */
Promise.prototype.race = (promiseArr) => {
    return new Promise((resolve, reject) => {
        const onFullfilled = (data) => {
            resolve(data);
        };

        const onRejected = (reason) => {
            reject(reason);
        };

        promiseArr.forEach((promise) => promise.then(onFullfilled, onRejected));
    });
};
