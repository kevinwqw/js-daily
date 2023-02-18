function myAjax(options) {
    const defaultConfig = {
        url: '',
        method: 'get',
        async: true,
        headers: { 'Content-type': 'application/json' }
    };
    const opts = { defaultConfig, ...options };
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(opts.method, opts.url, opts.async);
        xhr.onreadystatechange(() => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr);
                }
            }
        });
        xhr.send();
    }).catch((e) => {});
}
