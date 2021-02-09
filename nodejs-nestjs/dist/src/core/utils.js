"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogFileLocation = exports.dbUrlToObject = void 0;
const fs_1 = __importDefault(require("fs"));
exports.dbUrlToObject = (url, prefix) => {
    if (!url) {
        console.error(`${url} `);
        return {};
    }
    prefix = prefix || 'redis://';
    url = url.replace(prefix, '');
    const user = url.split(':')[0];
    const passwordAndHost = url.split(':')[1];
    const portAndDb = url.split(':')[2];
    const res = {
        host: passwordAndHost.split('@')[1],
        port: portAndDb.split('/')[0],
        db: portAndDb.split('/')[1],
        user,
        password: passwordAndHost.split('@')[0],
    };
    return res;
};
exports.createLogFileLocation = (fileLocation) => {
    const exist = fs_1.default.existsSync(fileLocation);
    if (!exist) {
        fs_1.default.mkdirSync(fileLocation, { recursive: true });
    }
    return fileLocation;
};
//# sourceMappingURL=utils.js.map