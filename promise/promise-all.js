/**
 *
 * @param {Array} promiseArr
 * @return {Array}
 */
Promise.prototype.all = (promiseArr) => {
    return new Promise((resolve, reject) => {
        const total = promiseArr.length;
        const resArr = new Array(total).fill(undefined);
        let resolveCounter = 0;

        const onFullfilled = (data, index) => {
            resolveCounter++;
            resArr[index] = data;
            if (resolveCounter === total) return resolve(resArr);
        };

        const onRejected = (reason) => {
            reject(reason);
        };

        promiseArr.forEach((promise, index) => {
            promise.then((data) => onFullfilled(data, index), onRejected);
        });
    });
};
