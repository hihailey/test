"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAuthenticationService = void 0;
const fakeDB_1 = require("../../../model/fakeDB");
class MockAuthenticationService {
    constructor() {
        this._db = fakeDB_1.database;
    }
    async getUserByEmailAndPassword(email, password) {
        throw new Error("Method not implemented");
    }
    async findUserByEmail(email) {
        throw new Error("Method not implemented");
    }
    async createUser(user) {
        throw new Error("Method not implemented");
    }
}
exports.MockAuthenticationService = MockAuthenticationService;
//# sourceMappingURL=Authentication.service.mock.js.map