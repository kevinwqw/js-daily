function loader(buf) {
    const cb = this.async();
    this.cacheable(true);
    gunzip(buf, (err, unzipped) => {
        if (err) {
            cb(err);
        } else {
            cb(err, unzipped);
        }
    });
}

export default loader;
