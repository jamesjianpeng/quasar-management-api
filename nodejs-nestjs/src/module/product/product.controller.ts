import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/entity/product.entity';
@Controller('/product')
export class ProductController {
  constructor(private readonly userService: ProductService) {}

  @Post('getProducts')
  getProducts(@Body() query: any) {
    return this.userService.getProducts(query);
  }
  @Post('getProductDetail')
  getProductDetail(@Body() query: any) {
    return this.userService.getProductDetail(query);
  }
  @Post('addProduct')
  addProduct(@Body() produc: Product) {
    return this.userService.addProduct(produc);
  }
}
