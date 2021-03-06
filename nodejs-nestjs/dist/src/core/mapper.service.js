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
var MapperService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperService = void 0;
const common_1 = require("@nestjs/common");
require("automapper-ts/dist/automapper");
let MapperService = MapperService_1 = class MapperService {
    constructor() {
        this.mapper = automapper;
        this.initializeMapper();
    }
    initializeMapper() {
        this.mapper.initialize(MapperService_1.configure);
    }
    createMap(source, destination) {
        return this.mapper.createMap(source, destination);
    }
    static configure(config) { }
    map(object, destinationKey, sourceKey, isArray = false) {
        const _sourceKey = isArray
            ? `${sourceKey || object.constructor.name}[]`
            : sourceKey || object.constructor.name;
        const _destinationKey = isArray ? `${destinationKey}[]` : destinationKey;
        const _object = object && typeof object.toJSON === 'function' ? object.toJSON() : object;
        return this.mapper.map(_sourceKey, _destinationKey, _object);
    }
};
MapperService = MapperService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], MapperService);
exports.MapperService = MapperService;
//# sourceMappingURL=mapper.service.js.map