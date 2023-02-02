/**
 *
 * @param {Array} promiseArr
 * @return {Array}
 */
Promise.prototype.race = (promiseArr) => {
    return new Promise((resolve, reject) => {
        let isCompeleted = false;
        const onFullfilled = (data) => {
            if (isCompeleted) return;
            isCompeleted = true;
            resolve(data);
        };

        const onRejected = (reason) => {
            if (isCompeleted) return;
            isCompeleted = true;
            reject(reason);
        };

        promiseArr.forEach((promise) => promise.then(onFullfilled, onRejected));
    });
};
