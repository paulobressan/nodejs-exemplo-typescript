"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const environment_1 = require("../config/environment");
class Server {
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
    setAddress() {
        return new Promise(resolve => {
            this.application.address = '';
        });
    }
    bootstrap(routes = []) {
        return this.initRouters(routes)
            .then(() => this);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map