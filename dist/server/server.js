"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../config/environment");
class Server {
    initDataBase() {
        mongoose.Promise = global.Promise;
        const options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        };
        return mongoose.connect(environment_1.environment.db.url, options);
    }
    initRouters(routes) {
        return new Promise((resolve, reject) => {
            try {
                this.application = express();
                this.application.use(bodyParser.urlencoded({ extended: true }));
                this.application.use(bodyParser.json());
                for (let route of routes) {
                    route.apply(this.application);
                }
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    address() {
        return `Express server listening on port ${environment_1.environment.server.port}`;
    }
    bootstrap(routes = []) {
        return this.initDataBase()
            .then(() => this.initRouters(routes)
            .then(() => this));
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map