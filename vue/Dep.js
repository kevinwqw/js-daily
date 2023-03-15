class Dep {
    constructor() {
        this.deps = [];
    }

    // 收集依赖
    addDep(dep) {
        this.deps.push(dep);
    }

    // 通知更新
    notify() {
        this.deps.forEach((dep) => dep.update());
    }
}
