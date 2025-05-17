let id = 0;
const products = [];

function resetProducts(){
    products.splice(0,products.length)
    id = 0;
};
function getProducts(){
    return products;
}
function getId(){
    return id;
}

function addProduct(name, price){
    if (!name || !price) {
        throw new Error("Name and price must be defined");
    }
    const productExists = products.find(product => product.name === name);
    if (productExists) {
        throw new Error("Product already exists");
    }
    const product = {
        id: id,
        name,
        price
    };
    id++;
    products.push(product);
    return true;
}
function removeProduct(id){
    const index = products.findIndex(product => product.id === id);
    if (index === -1) {
        throw new Error("Product not found");
    }
    products.splice(index, 1);
}
function getProduct(id){
    const product = products.find(product => product.id === id);
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
}
function updateProduct(id, name, price){
    const product = products.find(product => product.id === id);
    if (!product) {
        throw new Error("Product not found");
    }
    if(name){
        product.name = name;
    }
    if(price){
        product.price = price;
    }

}

module.exports = {
    resetProducts,
    getProducts,
    addProduct,
    removeProduct,
    getProduct,
    updateProduct,
    getId
};