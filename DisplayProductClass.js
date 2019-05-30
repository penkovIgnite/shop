class DisplayProduct {

	constructor(product) {
		this.product = product;
		if(!this.product instanceof Product)
        	throw new Error("Cannot instantiate an Product class.");
	}

	display() {
		let productDiv = $("<div>", {class: "col-4 mb-4"});
		let product = $("<div>", {class: "product-block"});
    	let img = $("<img>", {src: this.product.images, width: '100%'});
    	productDiv.append(product.append(img));

    	let name = $('<h3>', {text: this.product.name, class: "text-center pb-2"});
    	name.appendTo(product);

    	let price = $("<span>", {text: this.product.price+' лв.', class: "text-center d-block product-price pb-2"});
    	price.appendTo(product);

    	let button = $("<button>", {text: "Купи", class: "btn btn-success product-button", "data-product": this.product.id});
    	button.appendTo(product);
    	return productDiv;
	}
}