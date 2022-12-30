/**
 *
 * @param {Object} data
 * @return {Object}
 */
function shallowCopy(data) {
    let obj = {};
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            obj[key] = data[key];
        }
    }
    return obj;
}
