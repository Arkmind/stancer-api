"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNodeEnvironment = void 0;
var getNodeEnvironment = function () {
    return process.env.NODE_ENV === "production" ? "prod" : "test";
};
exports.getNodeEnvironment = getNodeEnvironment;
