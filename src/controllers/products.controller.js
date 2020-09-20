import * as ProductDomain from "../domain/products.domain";
import * as logger from "../libs/Logger";

export const createProduct = async (req, res) => {
  //destructuring
  const { name, category } = req.body;
  ProductDomain.createProduct({ name, category })
    .then((savedProduct) => {
      res.status(201).json(savedProduct);
    })
    .catch((error) => {
      logger.errorLog(`products.controller -> createProduct -> ${error}`);
      res.status(400).json(error);
    });
}; //createProduct()

export const getProductList = (req, res) => {
  ProductDomain.getProducts()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      logger.errorLog(`products.controller -> getProductList -> ${error}`);
      res.status(400).json(error);
    });
}; //getProductList()

export const getProductById = (req, res) => {
  const productId = req.params.productId
  if(productId){
    ProductDomain.getProductById(productId)
    .then((product) => {
      res.status(200).json(product)
    })
    .catch((error) => {
      logger.errorLog(`products.controller -> getProductById -> ${error}`)
      res.status(400).json(error)
    })
  } else {
    res.status(404).json({
      message: "Error, ID de producto inválido."
    })
  }
};

export const updateProductById = (req, res) => {
  res.status(400).json({
    message: "Endpoint not found yet.",
  });
};

export const deleteProductById = (req, res) => {
  res.status(400).json({
    message: "Endpoint not found yet.",
  });
};
