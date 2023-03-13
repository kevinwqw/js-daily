const _async = (fn) => {
    return new Promise((resolve, reject) => {
        try {
            const res = fn();
            if ((typeof res === 'object' && res !== null) || typeof res === 'function') {
                // 将fn的执行结果转换成promise对象
                Promise.resolve(res).then(resolve, reject);
            } else {
                resolve(res);
            }
        } catch (e) {
            reject(e);
        }
    });
};
