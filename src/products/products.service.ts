import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
  private products: Product[] = [];

  insertProduct(name: string, description: string, price: number): string {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, name, description, price);
    this.products.push(newProduct);
    return prodId;
  }

  getAllProducts() {
    return this.products.slice(); // returning a copy
  }

  getOneProduct(id: string) {
    const product = this.products.find((prod) => prod.id == id);
    if (!product) throw new NotFoundException('Could not find product.');
    return product;
  }

  updateProduct(id: string, name: string, description: string, price: number) {
    const product = this.getOneProduct(id);
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const updatedProduct = {...product};

    if (name) updatedProduct.name = name;
    if (description) updatedProduct.description = description;
    if (price) updatedProduct.price = price;

    this.products[productIndex] = updatedProduct;
  }

  deleteProduct(id: string) {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    this.products.splice(productIndex, 1);
  }
}