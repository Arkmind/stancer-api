"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var HttpClient_1 = require("./HttpClient");
var Payment_1 = require("@/request/Payment");
var utils_1 = require("@/utils");
var errorList_1 = require("@/error/errorList");
var Customer_1 = require("@/request/Customer");
var CreditCard_1 = require("@/request/CreditCard");
var Dispute_1 = require("@/request/Dispute");
var Refund_1 = require("@/request/Refund");
var Sepa_1 = require("@/request/Sepa");
var Payout_1 = require("@/request/Payout");
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(keys, environment) {
        var _this = _super.call(this) || this;
        _this.environment = (0, utils_1.getNodeEnvironment)();
        _this.creditCard = new CreditCard_1.CreditCard(_this);
        _this.customer = new Customer_1.Customer(_this);
        _this.dispute = new Dispute_1.Dispute(_this);
        _this.payment = new Payment_1.Payment(_this);
        _this.payout = new Payout_1.Payout(_this);
        _this.refund = new Refund_1.Refund(_this);
        _this.sepa = new Sepa_1.Sepa(_this);
        _this.keys = keys;
        _this.environment = environment || _this.environment;
        var secretKey = _this.keys["s".concat(_this.environment)];
        if (!secretKey)
            throw new Error(errorList_1.client.keys.undefined);
        _this.setDefaultHeaders({
            Authorization: _this.getBasicAuthKey(secretKey),
        });
        _this.payment = new Payment_1.Payment(_this);
        _this.customer = new Customer_1.Customer(_this);
        _this.creditCard = new CreditCard_1.CreditCard(_this);
        return _this;
    }
    Client.prototype.getKeys = function () {
        return this.keys;
    };
    Client.prototype.setKeys = function (keys) {
        this.keys = keys;
        return this.keys;
    };
    return Client;
}(HttpClient_1.HttpClient));
exports.Client = Client;
