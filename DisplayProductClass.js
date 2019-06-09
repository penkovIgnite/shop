class DisplayProduct {

	constructor(product) {
		this.product = product;
		if(!this.product instanceof Product)
        	throw new Error("Cannot instantiate an Product class.");
	}

	display() {
		let productDiv = $("<div>", {class: "col-4 mb-4"});
		let product = $("<div>", {class: "product-block", height: "450px"});

		let img = $("<img>", {src: this.product.images, width: '100%'});
		productDiv.append(product.append(img));

		let name = $('<h3>', {text: this.product.name, class: "text-center pt-3"});
		name.appendTo(product);

		let price = $("<span>", {text: this.product.price+' лв.', class: "text-center d-block product-price pb-2"});
		price.appendTo(product);

		let button = $("<button>", {text: "Купи", class: "btn btn-success product-button", "data-id": this.product.id});
		button.appendTo(product);
		return productDiv;
	}

	displayBuyProducts(count) {
		let button = $('nav a.btn').find('span.badge');
		button.text(count);
	}

	displayEmptyCart() {
		let emptyWrapper = $("<div>", {class: "text-center"});
		let noProduct = $('<h2>', {class: 'text-center', text: "Your Cart Is Currently Empty."});
		let button = $('<a>', {href: "index.html", class: "btn btn-secondary", text: "Return to shop"});

		return emptyWrapper.append(noProduct).append(button);
	}

	displayCartProducts(products) {
		let productsWrapper = $("<div>");
		if(products.length == 0) {
			productsWrapper = this.displayEmptyCart();
		} else {
			for(let i in products) {
				let product = products[i];
	
				let wrapper = $("<div>", {class: "row product-block mb-4", 'data-product-id': product.id});
	
				let imgWrapper = $("<div>", {class: "col-12 col-md-2 p-4"});
				let img = $("<img>", {src: product.images, height: '100px'});
				wrapper.append(imgWrapper.append(img));
	
				let infoWrapper = $("<div>", {class: "col-12 col-md-6 pl-3 mt-5"});
				let name = $('<h3>', {text: product.name});
				let description = $('<h6>', {text: product.description});
				wrapper.append(infoWrapper.append(name).append(description));
	
				let quantityWrapper = $("<div>", {class: "col-12 col-md-2 pt-5"});
				let quantity = $('<h2>');
	
				let quantityLeft = $("<span>", {class: "quantity mr-3", 'data-quantity': 'down', 'data-id': product.id});
				let quantityLeftIcon = $("<i>", {class: "fas fa-arrow-left"});
				quantityLeft.append(quantityLeftIcon).appendTo(quantity);
	
				quantity.append($("<span>", {class: "total-quantity", text: product.quantity}));
	
				let quantityRight = $("<span>", {class: "quantity ml-3", 'data-quantity': 'up', 'data-id': product.id});
				let quantityRightIcon = $("<i>", {class: "fas fa-arrow-right"});
				quantityRight.append(quantityRightIcon).appendTo(quantity);
	
				wrapper.append(quantityWrapper.append(quantity));
	
				let priceWrapper = $("<div>", {class: "col-12 col-md-2 pt-5"});
				let totalPrice = $('<h1>', {class: 'total-price', text: (product.price * product.quantity) + ' лв.'});
				wrapper.append(priceWrapper.append(totalPrice));
	
				productsWrapper.append(wrapper);
			}
		}

		return productsWrapper;
	}

	updateCartProduct(product) {
		let productRows = $('div[data-product-id]');
		productRows.each(function() {
			let productRow = $(this);
			if(productRow.data('product-id') == product.id) {
				if(product.quantity > 0) {
					productRow.find('span.total-quantity').text(product.quantity);
					productRow.find('h1.total-price').text((product.price * product.quantity) + ' лв.');
				} else {
					productRow.addClass('d-none');
				}
			}
		});
	}
}