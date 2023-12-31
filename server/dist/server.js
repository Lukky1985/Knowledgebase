"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileUpload = require("express-fileupload");
const category_route_1 = __importDefault(require("./routes/category.route"));
const products_route_1 = __importDefault(require("./routes/products.route"));
const productImages_route_1 = __importDefault(require("./routes/productImages.route"));
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use(fileUpload());
app.get("/", (req, res) => {
    res.send("Hello, this is PWD api endpoint");
});
app.use("/api/table/category", category_route_1.default);
app.use("/api/table/products", products_route_1.default);
app.use("/api/table/productImages", productImages_route_1.default);
/** Error handling */
app.use((req, res) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message
    });
});
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
