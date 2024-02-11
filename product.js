/*### Test crear producto

El primer test que vamos a hacer es el de crear un producto. Para ello, vamos a usar la función **addProduct**. 
Esta función recibe dos parámetros: el nombre del producto y el precio. 
Si alguno de los dos parámetros no está definido, la función lanzará un error. 
Si el producto ya existe, la función también lanzará un error. */

let products =[]

function addProduct (name, price){

if(typeof name!=='string' || typeof price !=='number'){

throw new Error('name must to be a string and price must to be a number')

}

const existProduct = products.find(product=>product.name===name)
if(existProduct){

    throw new Error('product already exists')


}

 products.push({name,price})


}

//Test eliminar producto

/*### Test eliminar producto

El siguiente test que vamos a hacer es el de eliminar un producto. Para ello, vamos a usar la función **removeProduct**. 
Esta función recibe un parámetro: el id del producto. Si el producto no existe, la función lanzará un error.*/


function removeProduct(id){

if(typeof id !=='number'){

        throw new Error('id must be a number')
        
}

if( id < 0 || id>products.length){

    throw new Error('Product does not exist')
    
}
    products.splice(id, 1);
  }

  /*addProduct('patata',5)
  addProduct('naranja', 6)
  addProduct('pera', 6)
  console.log(products)
  removeProduct(0)
  console.log(products)*/


function resetProducts(){


products=[]

}

/*### Test obtener producto

El siguiente test que vamos a hacer es el de obtener un producto. 
Para ello, vamos a usar la función **getProduct**. 
Esta función recibe un parámetro: el id del producto. 
Devuelve un objeto con los datos del producto. Si el producto no existe, la función lanzará un error.*/


function getProduct(id) {

    if(typeof id !=='number'){

        throw new Error('id must be a number')
        
}

if( id < 0 || id>products.length){

    throw new Error('Product does not exist')
    
}
 

    return products[id];

  }

 /* ### Test actualizar producto

  El siguiente test que vamos a hacer es el de actualizar un producto. Para ello, vamos a usar la función **updateProduct**. 
  Esta función recibe tres parámetros: el id del producto, el nombre del producto y el precio del producto. 
  Si el producto no existe, la función lanzará un error. 
  Si el nombre o el precio no están definidos, la función actualizará el producto con los datos que sí estén definidos.*/


  function updateProduct(id, name, price) {
    if (typeof id !== 'number' || typeof name !== 'string' || typeof price !== 'number') {
        throw new Error('id must be a number, name must be a string, and price must be a number');
    }

    if (id < 1 || id > products.length) {
        throw new Error('Product does not exist');
    }

    if (name || price) {
        products[id].name = name;
        products[id].price = price;
    }

    return products; 

    
}
  
  // Ejemplo de uso
  /*addProduct('patata', 5);
  addProduct('naranja', 6);
  addProduct('pera', 6);
  
  updateProduct(1, 'manzana', 3);
  console.log(products);
  */




module.exports={addProduct, removeProduct, resetProducts, getProduct, updateProduct}










