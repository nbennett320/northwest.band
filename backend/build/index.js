"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
// Initialize the express engine
const app = (0, express_1.default)();
const port = 4432;
const jsonParser = body_parser_1.default.json();
const proxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: 'http://localhost:3000',
    changeOrigin: true,
});
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
// Handling '/' Request
// app.get('/', (_req, res) => {
//   res.send("TypeScript With Expresss")
// })
app.use('/', require('./routes/index'));
app.use('/products', require('./routes/products'));
app.use('/cart', jsonParser, require('./routes/cart'));
// Server setup
app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}/`);
});
