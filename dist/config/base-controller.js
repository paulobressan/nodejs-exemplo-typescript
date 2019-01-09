"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
class BaseController {
    render(resp, next) {
        return (document) => {
            if (document) {
                resp.json(document);
                next();
            }
            else
                errors_1.errors.NotFoundError(resp, next)('Document not found');
        };
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base-controller.js.map