"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_mdb_lib_1 = require("@smartblog/nestjs-mdb-lib");
const nestjs_rdb_lib_1 = require("@smartblog/nestjs-rdb-lib");
const product_entity_1 = require("../../entity/product.entity");
const interface_1 = require("../../core/interface");
let ProductService = class ProductService {
    constructor(nestjsMdbLibService, nestjsRdbLibService) {
        this.nestjsMdbLibService = nestjsMdbLibService;
        this.nestjsRdbLibService = nestjsRdbLibService;
    }
    onModuleInit() {
        this.init();
    }
    async init() {
        const data = { cliKey: 'sz', db: 'quasar-management', col: 'products' };
        this.colUser = await this.nestjsMdbLibService.getCol(data);
    }
    async getProductDetail(data) {
        let item = await this.colUser.findOne(data);
        return item;
    }
    async getProducts(data) {
        const { pagination = {} } = data;
        let cursor = await this.colUser.find();
        const { offset, limit } = this.getOffsetAndLimit(pagination);
        const total = await cursor.count();
        cursor = await cursor.sort({}).skip(offset).limit(limit);
        const list = await cursor.toArray();
        return { list, pagination: Object.assign(Object.assign({}, pagination), { total }) };
    }
    async addProduct(product) {
        await this.colUser.insertOne(product);
        return {};
    }
    getOffsetAndLimit(p = {}) {
        const limit = p.pageSize || 10;
        let page = p.page || 1;
        if (page <= 0) {
            page = 1;
        }
        const offset = (page - 1) * limit;
        return {
            offset,
            limit,
        };
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nestjs_mdb_lib_1.NestjsMdbLibService,
        nestjs_rdb_lib_1.NestjsRdbLibService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map