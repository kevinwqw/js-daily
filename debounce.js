const debounce = (fn, delay) => {
    let timeout = null;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout((args) => {
            fn(...args);
        }, delay);
    };
};
