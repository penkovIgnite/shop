"use strict";
class Socks extends Product {
    construct(attributes) {
        super.construct();
        this.attributes = attributes;
    }

    buy() {
        this.price--;
        return true;
    }
}