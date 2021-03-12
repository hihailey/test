"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fakeDB_1 = require("../../../model/fakeDB");
class PostController {
    constructor(postService) {
        this.path = "/posts";
        this.router = express_1.Router();
        // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
        this.getAllPosts = (_, res) => {
            res.render("post/views/posts", { posts: fakeDB_1.posts });
        };
        // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary post object
        this.getPostById = async (request, res, next) => {
            res.render("post/views/post", { post: fakeDB_1.post });
        };
        // 🚀 These post methods needs to be implemented by you
        this.createComment = async (req, res, next) => { };
        this.createPost = async (req, res, next) => { };
        this.deletePost = async (req, res, next) => { };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.get(`${this.path}/:id`, this.getPostById);
        this.router.get(`${this.path}/:id/delete`, this.deletePost);
        this.router.post(`${this.path}/:id/comment`, this.createComment);
        this.router.post(`${this.path}`, this.createPost);
    }
}
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map