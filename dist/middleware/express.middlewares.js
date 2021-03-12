"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const morgan_1 = __importDefault(require("morgan"));
module.exports = (app) => {
    // Static File Serving and Post Body Parsing
    app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.set("views", path_1.default.join(__dirname, "..", "areas"));
    app.set("view engine", "ejs");
    // Logging Middleware
    app.use(morgan_1.default("tiny"));
    // Session Configuration
    app.use(express_session_1.default({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
        },
    }));
};
//# sourceMappingURL=express.middlewares.js.map