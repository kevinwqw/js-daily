const getByLodash = (obj, ...path) => {
    return path.map((p) => {
        let res = obj;
        const pathArr = p.replace(/\[/g, '.').replace(/\]/g, '').split('.');
        pathArr.forEach((item) => {
            res = res[item];
        });
        return res;
    });
};
