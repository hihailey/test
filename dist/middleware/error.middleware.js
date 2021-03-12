"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (error, request, response, next) => {
    const status = error.status || 500;
    const message = error.message || "An error has occured";
    console.log(status, message);
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map