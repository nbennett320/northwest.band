"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_json_1 = __importDefault(require("../config.json"));
const router = express_1.default.Router();
const url = `https://${config_json_1.default.store_name}.myshopify.com/api/2022-07/graphql.json`;
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const query = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': config_json_1.default.access_token,
        },
        body: `
      {
        products(first: 3) {
          edges {
            node {
              id
              handle
              title
              productType
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 2) {
                edges {
                  node {
                    url
                    altText
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    `
    });
    const data = yield query.json();
    const products = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.products) === null || _b === void 0 ? void 0 : _b.edges) === null || _c === void 0 ? void 0 : _c.map((edge) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return ({
            id: (_a = edge.node) === null || _a === void 0 ? void 0 : _a.id,
            handle: (_b = edge.node) === null || _b === void 0 ? void 0 : _b.handle,
            title: (_c = edge.node) === null || _c === void 0 ? void 0 : _c.title,
            productType: (_d = edge.node) === null || _d === void 0 ? void 0 : _d.productType,
            price: (_f = (_e = edge.node) === null || _e === void 0 ? void 0 : _e.priceRange.minVariantPrice) === null || _f === void 0 ? void 0 : _f.amount,
            images: (_j = (_h = (_g = edge.node) === null || _g === void 0 ? void 0 : _g.images) === null || _h === void 0 ? void 0 : _h.edges) === null || _j === void 0 ? void 0 : _j.map((image) => {
                var _a, _b, _c, _d;
                return ({
                    url: (_a = image.node) === null || _a === void 0 ? void 0 : _a.url,
                    altText: (_b = image.node) === null || _b === void 0 ? void 0 : _b.altText,
                    height: (_c = image.node) === null || _c === void 0 ? void 0 : _c.height,
                    width: (_d = image.node) === null || _d === void 0 ? void 0 : _d.width,
                });
            })
        });
    });
    res.send(products);
}));
router.get('/all-handles', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    const length = 100;
    const query = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': config_json_1.default.access_token,
        },
        body: `
      {
        products(first: ${length}) {
          edges {
            node {
              id
              handle
            }
          }
        }
      }
    `
    });
    const data = yield query.json();
    const products = (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.products;
    const handles = (_e = products.edges) === null || _e === void 0 ? void 0 : _e.map((edge) => { var _a; return (_a = edge.node) === null || _a === void 0 ? void 0 : _a.handle; });
    res.send(handles);
}));
router.get('/item/:handle', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    const handle = req.params.handle;
    const query = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': config_json_1.default.access_token,
        },
        body: `
      {
        product(handle: "${handle}") {
          id
          handle
          title
          description
          productType
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
                height
                width
              }
            }
          }
          options {
            id
            name
            values
          }
        }
      }
    `
    });
    const data = yield query.json();
    const product = {
        id: (_g = (_f = data === null || data === void 0 ? void 0 : data.data) === null || _f === void 0 ? void 0 : _f.product) === null || _g === void 0 ? void 0 : _g.id,
        handle: (_j = (_h = data === null || data === void 0 ? void 0 : data.data) === null || _h === void 0 ? void 0 : _h.product) === null || _j === void 0 ? void 0 : _j.handle,
        title: (_l = (_k = data === null || data === void 0 ? void 0 : data.data) === null || _k === void 0 ? void 0 : _k.product) === null || _l === void 0 ? void 0 : _l.title,
        description: (_o = (_m = data === null || data === void 0 ? void 0 : data.data) === null || _m === void 0 ? void 0 : _m.product) === null || _o === void 0 ? void 0 : _o.description,
        productType: (_r = (_q = (_p = data === null || data === void 0 ? void 0 : data.data) === null || _p === void 0 ? void 0 : _p.product) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.productType,
        price: (_u = (_t = (_s = data === null || data === void 0 ? void 0 : data.data) === null || _s === void 0 ? void 0 : _s.product) === null || _t === void 0 ? void 0 : _t.priceRange.minVariantPrice) === null || _u === void 0 ? void 0 : _u.amount,
        images: (_y = (_x = (_w = (_v = data === null || data === void 0 ? void 0 : data.data) === null || _v === void 0 ? void 0 : _v.product) === null || _w === void 0 ? void 0 : _w.images) === null || _x === void 0 ? void 0 : _x.edges) === null || _y === void 0 ? void 0 : _y.map((image) => {
            var _a, _b, _c, _d;
            return ({
                url: (_a = image.node) === null || _a === void 0 ? void 0 : _a.url,
                altText: (_b = image.node) === null || _b === void 0 ? void 0 : _b.altText,
                height: (_c = image.node) === null || _c === void 0 ? void 0 : _c.height,
                width: (_d = image.node) === null || _d === void 0 ? void 0 : _d.width,
            });
        }),
        options: (_z = data === null || data === void 0 ? void 0 : data.data) === null || _z === void 0 ? void 0 : _z.product.options,
    };
    res.send(product);
}));
module.exports = router;
