class Product {
    constructor(id, name, description, images, price, inStock) {
        [this.id, this.name, this.images, this.description, this.price, this.inStock] = [id, name, images, description, price, inStock];
    }

    buy() {
        return undefined;
    }
}