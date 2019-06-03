class Tshirt extends Product {
    constructor(id, name, description, images, price, inStock, attributes) {
        super(id, name, description, images, price, inStock);
        this.attributes = attributes;
    }
}