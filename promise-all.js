/**
 *
 * @param {Array} promiseArr
 * @return {Array}
 */
Promise.prototype.all = (promiseArr) => {
    return new Promise((resolve, reject) => {
        let isComplete = false;
        const resArr = new Array(promiseArr.length).fill(undefined);

        const onFullfilled = (data, index) => {
            if (isComplete) return;
            resArr[index] = data;
            if (resArr.every((res) => res !== undefined)) return resolve(resArr);
        };

        const onRejected = (reason) => {
            if (isComplete) return;
            isComplete = true;
            reject(reason);
        };

        promiseArr.forEach((promise, index) => {
            promise.then((data) => onFullfilled(data, index), onRejected);
        });
    });
};
