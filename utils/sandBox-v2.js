/**
 * 限定代码执行的scope
 */
function sandBox(code) {
    code = `with (sandBox) {${code}}`;
    const fn = new Function('sandBox', code);

    return (sandBox) => {
        const proxy = new Proxy(sandBox, {
            has(target, key) {
                return true;
            }
        });

        return fn(proxy);
    };
}

function sandBox_v1(code) {
    code = `with (sandbox_v1) {${code}}`;
    return new Function('', code);
}

//
function box(code) {
    const bCode = `with(box) {${code}}`;
    return new Function('box', bCode);
}
