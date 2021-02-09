"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonConfig = exports.serviceName = exports.ILOGGLING_OPTION = void 0;
const winston_1 = require("winston");
exports.ILOGGLING_OPTION = 'ILOGGLING_OPTION';
exports.serviceName = 'service';
exports.commonConfig = {
    format: winston_1.format.combine(winston_1.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston_1.format.simple())
};
//# sourceMappingURL=constans.js.map