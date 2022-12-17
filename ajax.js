/**
 *
 * @param {string} method
 * @param {string} url
 * @return {object}
 * AJAX请求分为几个阶段，在XMLHTTPRequest中通过readystate属性来指定不同的阶段状态。
 * 当状态改变时会通过onreadystatechange属性来调用回调函数，对不同阶段状态的改变作出响应操作。
 * xhr.readystate
 * xhr.onreadystatechange = callback
 * 0：XMLHttpRequest 代理已被创建， 但尚未调用 open() 方法。
 * 1：open() 方法已经被触发。在这个状态中，可以通过  setRequestHeader() 方法来设置请求的头部， 可以调用 send() 方法来发起请求。
 * 2：send() 方法已经被调用，响应头也已经被接收。
 * 3：响应体部分正在被接收。如果 responseType 属性是“text”或空字符串， responseText 将会在载入的过程中拥有部分响应数据。
 * 4：请求操作已经完成。这意味着数据传输已经彻底完成或失败。
 */
const ajax = (method, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onreadystatechange = function (e) {
        if (this.readyState === 4 && this.status === 200) {
            return this.response;
        }
    };
    xhr.send();
};
