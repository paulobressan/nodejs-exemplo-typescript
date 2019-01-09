"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Errors {
    NotFoundError(resp, next) {
        return (message) => {
            resp.statusCode = 404;
            resp.json(message);
            next(false);
        };
    }
}
exports.errors = new Errors();
//# sourceMappingURL=errors.js.map