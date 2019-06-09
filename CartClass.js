class Cart {
    setStorage(product) {
        this.product = product;
		if(!this.product instanceof Product)
            throw new Error("Cannot instantiate an Product class.");

        let currentProducts = localStorage.getItem('cartProduct' + this.product.id);
        if(currentProducts == null) {
            localStorage.setItem('cartProduct' + this.product.id, JSON.stringify(this.product));
        } else {
            localStorage.setItem('cartProduct' + this.product.id, currentProducts + JSON.stringify(this.product));
        }
    }

    clearStorage() {
        localStorage.clear();
    }

    buyProducts() {
        let strage = localStorage
        let allProducts = [];
        for(let i in strage) {
            if(i.includes('cartProduct')) {
                let storageProducts = strage[i];
                let products = storageProducts.toString().split(/[!{}*]/g).filter(Boolean);
                for(let item in products) {
                    allProducts.push(products[item]);
                }
            }
        }

        return allProducts;
    }

    sortProducts() {
        let sortProducts = {};
        let products = this.buyProducts();
		for(let i in products) {
			let product = products[i];
			product = JSON.parse('{'+product+'}');

			if(sortProducts[product.id] == undefined) {
				sortProducts[product.id] = product;
				sortProducts[product.id]['quantity'] = 1;
			} else {
				sortProducts[product.id]['quantity'] += 1;
			}
        }

        return sortProducts;
    }

    updateProducts(id, modify, products) {
        if(modify == 'up') {
            products[id].quantity += 1;
        } else if(modify == 'down') {
            products[id].quantity -= 1;
        }

        return products;
    }

}