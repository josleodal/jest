const { describe, it, expect } = require('@jest/globals');

const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

/*beforeEach(() => {
    resetProducts();
});*/

/*afterEach(() => {
    resetProducts();
});*/

//Test crear producto

beforeEach(() => {
    resetProducts();
})

describe('addProduct',()=>{
  it('should return true if  a is a string and b is a number',()=>{

    expect(()=>addProduct('vino',2).toBe('vino',2))

  })

  it('should throw an error if the first parameter is not a string', () => {
    expect(() => addProduct(5, 4)).toThrowError('name must to be a string');
  });

  it('should throw an error if the second parameter is not a number', () => {
    expect(() => addProduct('patatas', '5')).toThrowError('price must to be a number');
  });

  it('should throw an error if the product already exists', () => {
    addProduct('patatas', 5);
    expect(() => {
      addProduct('patatas', 5);
    }).toThrowError('product already exists');
  });


})

afterEach(() => {
    resetProducts();
})

beforeEach(() => {
    resetProducts();
})

//Test eliminar producto

describe('removeProduct',()=>{

    it('should throw an error if id is not a number',()=>{
     
        expect(() => removeProduct('hello')).toThrowError('id must be a number');


    })

    it('should throw an error if id  less to zero or bigger than products.lenght',()=>{
     
        expect(() => removeProduct(-1)).toThrowError('Product does not exist');


    })

    it('should remove the product with that entered id',()=>{

        addProduct('patatas', 5);
        addProduct('leche', 5);
     
        expect(() => removeProduct(1)).not.toContain('leche',5);


    })
})

afterEach(() => {
    resetProducts();
})

beforeEach(() => {
    resetProducts();
})

//Test obtener producto


describe('getProduct',()=>{

    it('should throw an error if id is not a number',()=>{
     
        expect(() => getProduct('hello')).toThrowError('id must be a number');


    })

    it('should throw an error if id  less to zero or bigger than products.lenght',()=>{
     
        expect(() => getProduct(-1)).toThrowError('Product does not exist');


    })

    it('should return the correct product when a valid id is provided', () => {
       
        addProduct('patatas', 5);
        addProduct('leche', 5);

      
        expect(getProduct(1)).toEqual({'name':'leche','price': 5});
    });
})

//Test actualizar producto

afterEach(() => {
    resetProducts();
})

beforeEach(() => {
    resetProducts();
})

describe('updateProduct', () => {
    it('should throw an error if id is not a number', () => {
        expect(() => updateProduct('hello', 2, 'bye')).toThrowError('id must be a number, name must be a string, and price must be a number');
    });

    it('should throw an error if id is less than zero or bigger than products.length', () => {
        expect(() => updateProduct(-1, 'manzana', 2)).toThrowError('Product does not exist');
    });

    it('should return the correct updated product', () => {
        addProduct('patatas', 5);
        addProduct('leche', 5);
        
     
        expect(updateProduct(1, 'pera', 2)).toContainEqual({ 'name': 'pera', 'price': 2 });
    });
});

afterEach(() => {
    resetProducts();
})






