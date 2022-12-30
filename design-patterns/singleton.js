class Singleton {
    constructor() {
        this.instance = {};
    }

    static getSingleton() {
        if (this.instance) return this.instance;

        return new Singleton();
    }
}

Singleton.getSingleton();
