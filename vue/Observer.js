class Observer {
    constructor(data, key) {
        this.observer(data, key, data[key]);
    }

    observer(data, key, val) {
        const dep = new Dep();
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
            get() {
                if (dep.target) {
                    dep.addDep(Dep.target);
                }
                return val;
            },
            set(newVal) {
                if ((newVal = val)) return;
                val = newVal;
                dep.notify;
            }
        });
    }
}
