"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseService {
    constructor(basePath) {
        this.basePath = basePath;
    }
    envelope(document) {
        let resource = Object.assign({ _links: {} }, document.toJSON());
        resource._links.self = `${this.basePath}/${resource._id}`;
        return resource;
    }
    envelopeAll(documents, options = {}) {
        console.log(options);
        const resource = {
            _links: {
                self: options.url
            },
            items: documents
        };
        if (options.page && options.count && options.pageSize) {
            if (options.page > 1) {
                resource._links.previous = `/${this.basePath}?page=${options.page - 1}`;
            }
            const remaing = options.count - (options.page * options.pageSize);
            console.log(remaing);
            if (remaing > 0)
                resource._links.next = `/${this.basePath}?page=${options.page + 1}`;
        }
        return resource;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base-service.js.map