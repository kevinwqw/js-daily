Promise.prototype.allSettled = (promiseArr) => {
    return new Promise((resolve, reject) => {
        const resArr = new Array(promiseArr.length).fill(undefined);

        const onFullfilled = (data, index) => {
            resArr[index] = data;
            // filter(Boolean) will remove all the 'false' values(false, null, undefined, 0, NaN, '')
            if (resArr.filter(Boolean).length === promiseArr.length) resolve(resArr);
        };

        const onRejected = (reason, index) => {
            resArr[index] = reason;
            if (resArr.filter(Boolean).length === promiseArr.length) resolve(resArr);
        };

        promiseArr.forEach((promise) =>
            promise.then(
                (data, index) => onFullfilled(data, index),
                (reason, index) => onRejected(reason, index)
            )
        );
    });
};
