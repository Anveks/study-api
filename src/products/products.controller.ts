import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductService } from "./products.service";
import { Product } from "./product.model";

@Controller('/products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {};

  @Post() // request decorator
  // @Body completeBody: {name: string, desc: string, price: string}
  addProduct(
    @Body("name") prodName: string, 
    @Body("description") prodDesc: string, 
    @Body("price") prodPrice: number
    ): any {
    const generatedId = this.productService.insertProduct(prodName, prodDesc, prodPrice);
    return { id: generatedId }
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  getOneProduct(
    @Param('id') id: string // a decorator to extract a parameter
    ) {
    return this.productService.getOneProduct(id);
  }

  @Patch('/:id')
  updateProduct(
    @Param('id') id: string,
    @Body("name") prodName: string, 
    @Body("description") prodDesc: string, 
    @Body("price") prodPrice: number
  ) {
    this.productService.updateProduct(id, prodName, prodDesc, prodPrice);
    return null;
  }

  @Delete('/:id')
  removeProduct(@Param('id') id: string) {
    this.productService.deleteProduct(id);
    return null;
  }
}