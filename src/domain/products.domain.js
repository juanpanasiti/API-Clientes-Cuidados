import * as ProductRepo from "../data/repos/products.repo";
import * as logger from "../libs/Logger";

export const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    ProductRepo.createProduct(product)
      .then((savedProduct) => {
        resolve(savedProduct);
      })
      .catch((error) => {
        logger.errorLog(`products.domain -> createProduct -> ${error}`);
        reject(error);
      });
  });
}; //createProduct()

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    ProductRepo.getProducts()
      .then((products) => {
        resolve(products);
      })
      .catch((error) => {
        logger.errorLog(`products.domain -> getProducts -> ${error}`);
      });
  });
}; //getProducts()

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    ProductRepo.getProductById(productId)
      .then((product) => {
        resolve(product);
      })
      .catch((error) => {
        logger.errorLog(`products.domain -> getProductById -> ${error}`);
        reject(error);
      });
  });
}; //getProductById()
