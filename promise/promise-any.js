/**
 *
 * @param {Array} promiseArr
 * @return {Array}
 */
Promise.prototype.any = (promiseArr) => {
    return new Promise((resolve, reject) => {
        let isCompeleted = false;
        const resArr = new Array(promiseArr.length).fill(undefined);
        const onFullfilled = (data) => {
            if (isCompeleted) return;
            isCompeleted = true;
            resolve(data);
        };

        const onRejected = (reason, index) => {
            if (isCompeleted) return;
            resArr[index] = reason;
            if (resArr.every((res) => res !== undefined)) reject('All promise were rejected');
        };

        promiseArr.forEach((promise) => (onFullfilled, promise.then((reason, index) => onRejected(reason, index))));
    });
};
