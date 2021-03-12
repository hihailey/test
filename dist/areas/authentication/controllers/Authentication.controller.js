"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class AuthenticationController {
    constructor(service) {
        this.path = "/auth";
        this.router = express_1.default.Router();
        this.showLoginPage = (_, res) => {
            res.render("authentication/views/login");
        };
        this.showRegistrationPage = (_, res) => {
            res.render("authentication/views/register");
        };
        // 🔑 These Authentication methods needs to be implemented by you
        this.login = (req, res) => { };
        this.registration = async (req, res, next) => { };
        this.logout = async (req, res) => { };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/register`, this.showRegistrationPage);
        this.router.post(`${this.path}/register`, this.registration);
        this.router.get(`${this.path}/login`, this.showLoginPage);
        this.router.post(`${this.path}/login`, this.login);
        this.router.get(`${this.path}/logout`, this.logout);
    }
}
exports.default = AuthenticationController;
//# sourceMappingURL=Authentication.controller.js.map