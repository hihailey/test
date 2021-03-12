"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentViewModel = void 0;
// The following is an (incomplete) example of what a view model may look like
// The purpose of a view model is to format the incoming data from the database
// into what the ejs page requires specifically.
// Please feel free to change this in any way you like.
class CommentViewModel {
    constructor(comment) {
        this.userId = comment.userId;
        this.createdAt = comment.createdAt;
        this.message = comment.message;
    }
}
exports.CommentViewModel = CommentViewModel;
//# sourceMappingURL=comment.viewmodel.js.map