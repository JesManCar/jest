const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct, getId} = require('./products.js');



describe("addProduct",() => {
    it("Should add a product", () => {
        addProduct("First Product", 100);
        const products = getProducts();
        expect(products.length).toBe(1);
        expect(products[0].name).toBe("First Product");
        expect(products[0].price).toBe(100);
        expect(getId()).toBe(1);
    });
    it("Should throw an error if added a product with the same name", () => {
        addProduct("First Product", 100);
        expect(() => addProduct("First Product", 200)).toThrow("Product already exists");
    });
    it("Should throw an error if name are not defined", () => {
        expect(() => addProduct()).toThrow("Name and price must be defined");
    });
    it("Should throw an error if price are not defined", () => {
        expect(() => addProduct("Product")).toThrow("Name and price must be defined");
    })
});

describe("removeProduct", () => {
    it("Should remove a product", () => {
        addProduct("First Product", 100);
        addProduct("Second Product", 200);
        const products = getProducts();
        expect(products.length).toBe(2);
        removeProduct(0);
        expect(products.length).toBe(1);
        expect(products[0].name).toBe("Second Product");
    });
    it("Should throw an error if product not found", () => {
        expect(() => removeProduct(0)).toThrow("Product not found");
    });
});

describe("getProduct", () => {
    it("Should get a product", () => {
        addProduct("First Product", 100);
        const product = getProduct(0);
        expect(product.name).toBe("First Product");
        expect(product.price).toBe(100);
    });
    it("Should throw an error if product not found", () => {
        expect(() => getProduct(0)).toThrow("Product not found");
    });
});

describe("updateProduct", () => {
    it("Should update a product", () => {
        addProduct("First Product", 100);
        updateProduct(0, "Updated Product", 200);
        const product = getProduct(0);
        expect(product.name).toBe("Updated Product");
        expect(product.price).toBe(200);
    });
    it("Should throw an error if product not found", () => {
        expect(() => updateProduct(1)).toThrow("Product not found");
    });
    it("Should update only name", () => {
        addProduct("First Product", 100);
        updateProduct(0, "Updated Product");
        const product = getProduct(0);
        expect(product.name).toBe("Updated Product");
        expect(product.price).toBe(100);
    });
    it("Should update only price", () => {
        addProduct("First Product", 100);
        updateProduct(0, "", 200);
        const product = getProduct(0);
        expect(product.name).toBe("First Product");
        expect(product.price).toBe(200);
    });
});

beforeEach(() => {
    resetProducts();
});
// PODEMOS USAR EL BEFORE EACH PARA LIMPAR A LISTA DE PRODUTOS ANTES DE CADA TEST
// O PODEMOS USAR AFTER EACH PARA LIMPAR A LISTA DE PRODUTOS DESPUES DE CADA TEST

/*afterEach(() => {
    resetProducts();
});*/