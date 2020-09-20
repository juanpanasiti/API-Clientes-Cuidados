import Product from "../models/Product";
import * as logger from "../../libs/Logger";

export const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    const newProduct = new Product(product);
    newProduct
      .save()
      .then((savedProduct) => {
        resolve(savedProduct);
      })
      .catch((error) => {
        logger.errorLog(`products.repo -> createProduct -> ${error}`);
        reject(error);
      });
  });
}; //createProduct()

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    Product.find({})
      .then((products) => {
        resolve(products);
      })
      .catch((error) => {
        logger.errorLog(`products.repo -> getProducts -> ${error}`);
        reject(error);
      });
  });
}; //getProducts()

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    Product.findById(productId)
      .then((product) => {
        resolve(product);
      })
      .catch((error) => {
        logger.errorLog(`products.repo -> getProductById -> ${error}`);
        reject(error);
      });
  });
}; //getProductById()
