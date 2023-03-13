/**
 *
 * @param {Array} promiseArr
 * @return {Array}
 */
Promise.prototype.any = (promiseArr) => {
    return new Promise((resolve, reject) => {
        const total = promiseArr.length;
        const resArr = new Array(total).fill(undefined);
        let rejectCounter = 0;
        const onFullfilled = (data) => {
            resolve(data);
        };

        const onRejected = (reason, index) => {
            rejectCounter++;
            if (rejectCounter === total) reject('All promise were rejected');
        };

        promiseArr.forEach((promise) => (onFullfilled, promise.then((reason, index) => onRejected(reason, index))));
    });
};
