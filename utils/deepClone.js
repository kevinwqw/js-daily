/**
 *
 * @param {any} data
 * @return {string}
 */
function getDataType(data) {
    const type = Object.prototype.toString().call(data);
    return type.slice(8, -1);
}

/**
 *
 * @param {any} data
 * @return {any}
 */
function deepClone(data) {
    const dataType = getDataType(data);
    if (dataType === 'Object') {
        const obj = {};
        for (let key in data) {
            obj[key] = deepClone(data[key]);
        }
        return obj;
    }

    if (dataType === 'Array') {
        const arr = [];
        data.forEach((d, i) => {
            arr[i] = deepClone(d);
        });
        return arr;
    }

    if (dataType === 'Function') {
        return new Function(`return ${data.toString()}`).call(this);
    }

    if (dataType === 'Date') {
        return new Date(data.valueOf());
    }

    if (dataType === 'RegExp') {
        return new RegExp(data);
    }

    if (dataType === 'Map') {
        const mapData = new Map();
        data.forEach((key, val) => {
            mapData.set(key, deepClone(val));
        });
        return mapData;
    }

    if (dataType === 'Set') {
        const setData = new Set();
        for (let val of data.values()) {
            setData.add(deepClone(val));
        }
        return setData;
    }

    return data;
}
