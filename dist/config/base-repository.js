"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const environment_1 = require("./environment");
class BaseRepository {
    constructor(model) {
        this.model = model;
        this.pageSize = parseInt(environment_1.environment.server.pageSize);
    }
    prepareOne(query) {
        return query;
    }
    prepareAll(query) {
        return query;
    }
    findAll(page) {
        let skip = this.pageSize * (page - 1);
        return this.prepareAll(this.model.find())
            .skip(skip)
            .limit(this.pageSize);
    }
    countDocuments() {
        return this.model.countDocuments({})
            .exec();
    }
    documentName() {
        return this.model.collection.name;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base-repository.js.map