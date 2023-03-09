const createSandBox = (globalObj) => {
    const contextObj = Object.create(null);
    const proxy = new Proxy(contextObj, {
        get: (target, property) => {
            switch (property) {
                case 'globalThis':
                case 'window':
                case 'self':
                case 'parent':
                    return proxy;
                default:
                    // 如果对象存在该属性则返回
                    if (property in target) {
                        return target[property];
                    }
                    // 从全局对象中获取该属性并返回
                    const value = globalObj[property];
                    if (typeof value === 'function' && !value.prototype) {
                        return value.bind(globalObj);
                    }

                    return value;
            }
        }
    });

    return (code) => Function(`proxy`, `with(proxy){${code}}`).bind(proxy)(proxy);
};
