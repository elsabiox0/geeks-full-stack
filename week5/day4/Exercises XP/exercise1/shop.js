const products = require('./products');

function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  if (product) {
    console.log(" Product Found:");
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(` Product "${productName}" not found.`);
  }
}

findProductByName("Laptop");
findProductByName("Shoes");
findProductByName("Tablet");
