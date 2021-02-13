import { Injectable, OnModuleInit } from '@nestjs/common';
import { NestjsMdbLibService } from '@smartblog/nestjs-mdb-lib';
import { NestjsRdbLibService } from '@smartblog/nestjs-rdb-lib';
import { Product } from 'src/entity/product.entity';
import { Collection } from 'mongodb';
import { IServerResponse } from 'src/core/interface'
// import { Collection } from 'mongodb';
@Injectable()
export class ProductService implements OnModuleInit {
  private colUser: Collection

  constructor(
    private nestjsMdbLibService: NestjsMdbLibService,
    private nestjsRdbLibService: NestjsRdbLibService,
  ) {}

  onModuleInit () {
    this.init()
  }

  async init () {
    const data = { cliKey: 'sz', db: 'quasar-management', col: 'products' };
    this.colUser = await this.nestjsMdbLibService.getCol(data);
  }

  async getProductDetail(data: any) {
    let item = await this.colUser.findOne(data);
    return item
  }


  async getProducts(data: any) {
    const { pagination = {} } = data
    let cursor = await this.colUser.find();
    const {
        offset,
        limit
    } = this.getOffsetAndLimit(pagination)
    const total = await cursor.count()
    cursor = await cursor.sort({}).skip(offset).limit(limit)
    const list = await cursor.toArray()
    return { list, pagination: { ...pagination,  total } }
  }

  async addProduct(product: Product): Promise<IServerResponse<Product | null>> {
    await this.colUser.insertOne(product)
    return {}
  }

  getOffsetAndLimit (p: { pageSize?: number, page?: number } = {}) {
      const limit = p.pageSize || 10
      let page = p.page || 1
      if (page <= 0) {
          page = 1
      }
      const offset = (page - 1) * limit
      return {
          offset,
          limit,
      }
  }
}
