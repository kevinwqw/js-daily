class Product {
    constructor(name) {
        this.name = name;
    }
}

class Factory {
    makeMoney() {
        return 'money';
    }

    createProduct() {
        return new Product();
    }
}


