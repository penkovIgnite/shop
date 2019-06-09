$(document).ready(function() {
    let nav = $("<nav>", {class: "navbar navbar-expand-lg navbar-dark bg-dark rounded-lg"});
    let logo = $("<a>", {href: "#", class: "navbar-brand", text: "Shop - Pragmatic"});
    nav.append(logo);

    let toggle = $("<button>", {
        class: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarText",
        "aria-controls": "navbarText",
        "aria-expanded": "true",
        "aria-label": "Toggle navigation"
    });
    let toggleSpan = $("<span>", {class: "navbar-toggler-icon"});
    toggle.append(toggleSpan);
    nav.append(toggle);

    let menu = $("<div>", {class: "collapse navbar-collapse", id: "navbarText"});
    let ulMenu = $("<ul>", {class: "navbar-nav mr-auto"});
    let liMenu = $("<li>", {class: "nav-item active"});
    let aLiMenu = $("<a>", {href: "index.html", class: "nav-link", text: "Home"});
    liMenu.append(aLiMenu)
    ulMenu.append(liMenu);
    menu.append(ulMenu);
    nav.append(menu);

    let cart = $("<a>", {href: "cart.html", class: "btn btn-secondary my-2 my-sm-0"});
    let cartIcon = $("<i>", {class: "fa fa-shopping-bag"});
    let badge = $("<span>", {class: "badge badge-light ml-2", text: 0});
    cart.append(cartIcon);
    cart.append(badge);
    nav.append(cart);

    $(".navigation").append(nav);
});