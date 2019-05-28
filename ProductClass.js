"use strict";
class Product {
    construct(name, description, images, price, inStock) {
        [this.name, this.images, this.description, this.price, this.inStock] = [name, images, description, price, inStock];
    }

    buy() {
        return undefined;
    }

    toString() {
        return "asdads";
    }
}