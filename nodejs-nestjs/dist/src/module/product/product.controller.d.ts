import { ProductService } from './product.service';
import { Product } from 'src/entity/product.entity';
export declare class ProductController {
    private readonly userService;
    constructor(userService: ProductService);
    getProducts(query: any): Promise<{
        list: any[];
        pagination: any;
    }>;
    addProduct(produc: Product): Promise<import("../../core/interface").IServerResponse<Product>>;
}
