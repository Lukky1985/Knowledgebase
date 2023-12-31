"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productImagesController = exports.ProductsController = exports.CategoryController = void 0;
var category_controller_1 = require("./category.controller");
Object.defineProperty(exports, "CategoryController", { enumerable: true, get: function () { return __importDefault(category_controller_1).default; } });
var products_controller_1 = require("./products.controller");
Object.defineProperty(exports, "ProductsController", { enumerable: true, get: function () { return __importDefault(products_controller_1).default; } });
var productImages_controller_1 = require("./productImages.controller");
Object.defineProperty(exports, "productImagesController", { enumerable: true, get: function () { return __importDefault(productImages_controller_1).default; } });
