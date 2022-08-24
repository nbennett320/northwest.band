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
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const cartId = (_a = req.body) === null || _a === void 0 ? void 0 : _a.cartId;
    if (!cartId) {
        res.status(400).send({
            error: true,
            message: "No cart id provided"
        });
        return;
    }
    const query = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': config_json_1.default.access_token,
        },
        body: `
      {
        cart(id: "${cartId}") {
          id
          totalQuantity
          checkoutUrl
          lines(first: 10) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    product {
                      handle
                      title
                      priceRange {
                        minVariantPrice {
                          amount
                          currencyCode
                        }
                      }
                      images(first: 1) {
                        edges {
                          node {
                            id
                            url
                            altText
                          }
                        }
                      }
                    }
                    selectedOptions {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            totalTaxAmount {
              amount
              currencyCode
            }
            totalDutyAmount {
              amount
              currencyCode
            }
            checkoutChargeAmount {
              amount
              currencyCode
            }
          }
        }
      }
    `
    });
    const data = yield query.json();
    const cart = {
        id: (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.cart.id,
        totalQuantity: (_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.cart.totalQuantity,
        checkoutUrl: (_d = data === null || data === void 0 ? void 0 : data.data) === null || _d === void 0 ? void 0 : _d.cart.checkoutUrl,
        items: (_g = (_f = (_e = data === null || data === void 0 ? void 0 : data.data) === null || _e === void 0 ? void 0 : _e.cart.lines) === null || _f === void 0 ? void 0 : _f.edges) === null || _g === void 0 ? void 0 : _g.map((edge) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            return ({
                cartLineId: (_a = edge === null || edge === void 0 ? void 0 : edge.node) === null || _a === void 0 ? void 0 : _a.id,
                variantId: (_b = edge === null || edge === void 0 ? void 0 : edge.node) === null || _b === void 0 ? void 0 : _b.merchandise.id,
                handle: (_c = edge === null || edge === void 0 ? void 0 : edge.node) === null || _c === void 0 ? void 0 : _c.merchandise.product.handle,
                title: (_d = edge === null || edge === void 0 ? void 0 : edge.node) === null || _d === void 0 ? void 0 : _d.merchandise.product.title,
                price: (_f = (_e = edge === null || edge === void 0 ? void 0 : edge.node) === null || _e === void 0 ? void 0 : _e.merchandise.product.priceRange.minVariantPrice) === null || _f === void 0 ? void 0 : _f.amount,
                image: {
                    id: (_j = (_h = (_g = edge === null || edge === void 0 ? void 0 : edge.node) === null || _g === void 0 ? void 0 : _g.merchandise.product.images) === null || _h === void 0 ? void 0 : _h.edges[0]) === null || _j === void 0 ? void 0 : _j.node.id,
                    url: (_m = (_l = (_k = edge === null || edge === void 0 ? void 0 : edge.node) === null || _k === void 0 ? void 0 : _k.merchandise.product.images) === null || _l === void 0 ? void 0 : _l.edges[0]) === null || _m === void 0 ? void 0 : _m.node.url,
                    altText: (_q = (_p = (_o = edge === null || edge === void 0 ? void 0 : edge.node) === null || _o === void 0 ? void 0 : _o.merchandise.product.images) === null || _p === void 0 ? void 0 : _p.edges[0]) === null || _q === void 0 ? void 0 : _q.node.altText,
                },
                selectedOptions: (_r = edge === null || edge === void 0 ? void 0 : edge.node) === null || _r === void 0 ? void 0 : _r.merchandise.selectedOptions,
            });
        }),
        cost: {
            totalAmount: (_h = data === null || data === void 0 ? void 0 : data.data) === null || _h === void 0 ? void 0 : _h.cart.cost.totalAmount,
            subtotalAmount: (_j = data === null || data === void 0 ? void 0 : data.data) === null || _j === void 0 ? void 0 : _j.cart.cost.subtotalAmount,
            taxAmount: (_k = data === null || data === void 0 ? void 0 : data.data) === null || _k === void 0 ? void 0 : _k.cart.cost.totalTaxAmount,
            dutyAmount: (_l = data === null || data === void 0 ? void 0 : data.data) === null || _l === void 0 ? void 0 : _l.cart.cost.totalDutyAmount,
            checkoutChargeAmount: (_m = data === null || data === void 0 ? void 0 : data.data) === null || _m === void 0 ? void 0 : _m.cart.cost.checkoutChargeAmount,
        },
    };
    res.send(cart);
}));
router.post('/create', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _o, _p, _q, _r, _s, _t, _u, _v, _w;
    const itemHandle = (_o = req.body) === null || _o === void 0 ? void 0 : _o.handle;
    const selectedOptions = Object.values((_p = req.body) === null || _p === void 0 ? void 0 : _p.selected).map(val => {
        var _a;
        return ({
            name: (_a = val === null || val === void 0 ? void 0 : val.data) === null || _a === void 0 ? void 0 : _a.optionName,
            value: val === null || val === void 0 ? void 0 : val.value
        });
    });
    const selectedOptionsJson = JSON.stringify(selectedOptions).replace(/"([^"]+)":/g, '$1:');
    const variantQuery = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': config_json_1.default.access_token,
        },
        body: `
      {
        product(handle: "${itemHandle}") {
          variantBySelectedOptions(selectedOptions: ${selectedOptionsJson}) {
            id
          }
        }
      }
    `
    });
    const variantData = yield (variantQuery === null || variantQuery === void 0 ? void 0 : variantQuery.json());
    const variantId = (_s = (_r = (_q = variantData === null || variantData === void 0 ? void 0 : variantData.data) === null || _q === void 0 ? void 0 : _q.product) === null || _r === void 0 ? void 0 : _r.variantBySelectedOptions) === null || _s === void 0 ? void 0 : _s.id;
    const cartQuery = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/graphql',
            'x-shopify-storefront-access-token': config_json_1.default.access_token,
        },
        body: `
      mutation {
        cartCreate(
          input: {
            lines: [
              {
                quantity: 1,
                merchandiseId: "${variantId}"
              }
            ]
          }
        ) {
          cart {
            id
            totalQuantity
          }
        }
      }
    `
    });
    const cartData = yield cartQuery.json();
    const cart = {
        id: (_u = (_t = cartData === null || cartData === void 0 ? void 0 : cartData.data) === null || _t === void 0 ? void 0 : _t.cartCreate) === null || _u === void 0 ? void 0 : _u.cart.id,
        totalQuantity: (_w = (_v = cartData === null || cartData === void 0 ? void 0 : cartData.data) === null || _v === void 0 ? void 0 : _v.cartCreate) === null || _w === void 0 ? void 0 : _w.cart.totalQuantity,
    };
    res.send(cart);
}));
router.post('/remove', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _x, _y, _z, _0;
    const cartId = (_x = req.body) === null || _x === void 0 ? void 0 : _x.cartId;
    const lineId = (_y = req.body) === null || _y === void 0 ? void 0 : _y.lineId;
    if (!cartId) {
        res.status(400).send({
            error: true,
            message: "No cart id provided",
        });
        return;
    }
    if (!lineId) {
        res.status(400).send({
            error: true,
            message: "No cart line id provided",
        });
        return;
    }
    const query = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/graphql',
            'x-shopify-storefront-access-token': config_json_1.default.access_token,
        },
        body: `
      mutation {
        cartLinesRemove(
          cartId: "${cartId}",
          lineIds: ["${lineId}"]
        ) {
          cart {
            totalQuantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
              totalDutyAmount {
                amount
                currencyCode
              }
              checkoutChargeAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `
    });
    const data = yield query.json();
    if ((_0 = (_z = data === null || data === void 0 ? void 0 : data.data) === null || _z === void 0 ? void 0 : _z.userErrors) === null || _0 === void 0 ? void 0 : _0.code) {
        const { code, field, message } = data.data.userErrors;
        res.status(500).send({
            error: true,
            message: `Shopify error ${code} on ${field}: ${message}`
        });
        return;
    }
    const updateData = {
        totalQuantity: data === null || data === void 0 ? void 0 : data.data.cartLinesRemove.cart.totalQuantity,
        cost: data === null || data === void 0 ? void 0 : data.data.cartLinesRemove.cart.cost,
    };
    res.send(updateData);
}));
router.post('/add', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _1, _2, _3, _4, _5, _6, _7, _8;
    const cartId = (_1 = req.body) === null || _1 === void 0 ? void 0 : _1.cartId;
    const itemHandle = (_2 = req.body) === null || _2 === void 0 ? void 0 : _2.handle;
    const selectedOptions = Object.values((_3 = req.body) === null || _3 === void 0 ? void 0 : _3.selected).map(val => {
        var _a;
        return ({
            name: (_a = val === null || val === void 0 ? void 0 : val.data) === null || _a === void 0 ? void 0 : _a.optionName,
            value: val === null || val === void 0 ? void 0 : val.value
        });
    });
    const selectedOptionsJson = JSON.stringify(selectedOptions).replace(/"([^"]+)":/g, '$1:');
    const variantQuery = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': config_json_1.default.access_token,
        },
        body: `
      {
        product(handle: "${itemHandle}") {
          variantBySelectedOptions(selectedOptions: ${selectedOptionsJson}) {
            id
          }
        }
      }
    `
    });
    const variantData = yield (variantQuery === null || variantQuery === void 0 ? void 0 : variantQuery.json());
    const variantId = (_6 = (_5 = (_4 = variantData === null || variantData === void 0 ? void 0 : variantData.data) === null || _4 === void 0 ? void 0 : _4.product) === null || _5 === void 0 ? void 0 : _5.variantBySelectedOptions) === null || _6 === void 0 ? void 0 : _6.id;
    const cartQuery = yield (0, node_fetch_1.default)(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token': config_json_1.default.access_token,
        },
        body: `
      mutation {
        cartLinesAdd(
          cartId: "${cartId}",
          lines: [
            {
              quantity: 1,
              merchandiseId: "${variantId}"
            }
          ]
        ) {
          cart {
            totalQuantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
              subtotalAmount {
                amount
                currencyCode
              }
              totalTaxAmount {
                amount
                currencyCode
              }
              totalDutyAmount {
                amount
                currencyCode
              }
              checkoutChargeAmount {
                amount
                currencyCode
              }
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }
    `
    });
    const cartData = yield cartQuery.json();
    if ((_8 = (_7 = cartData === null || cartData === void 0 ? void 0 : cartData.data) === null || _7 === void 0 ? void 0 : _7.userErrors) === null || _8 === void 0 ? void 0 : _8.code) {
        const { code, field, message } = cartData.data.userErrors;
        res.status(500).send({
            error: true,
            message: `Shopify error ${code} on ${field}: ${message}`
        });
        return;
    }
    const updateData = {
        totalQuantity: cartData === null || cartData === void 0 ? void 0 : cartData.data.cartLinesAdd.cart.totalQuantity,
        cost: cartData === null || cartData === void 0 ? void 0 : cartData.data.cartLinesAdd.cart.cost,
    };
    res.send(updateData);
}));
module.exports = router;
