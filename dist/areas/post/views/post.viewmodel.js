"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostViewModel = void 0;
// The following is an (incomplete) example of what a view model may look like
// The purpose of a view model is to format the incoming data from the database
// into what the ejs page requires specifically.
// For example, you may need to show a date on the ejs page like so:
// Date: Monday, Jan 14, 2021
// The default date format in javascript when you call new Date() looks completely different.
// You could solve this in the view model by changing line 19 to a string, and then having a helper
// method which converts the incoming date from the constructor (of type date) to a string formatted
// date that you store in createdAt.
class PostViewModel {
    constructor(post) {
        var _a, _b, _c;
        this.postId = post.id;
        this.userId = post.userId;
        this.createdAt = post.createdAt;
        this.message = post.message;
        this.comments = (_a = post.comments) === null || _a === void 0 ? void 0 : _a.toString();
        this.reposts = (_b = post.reposts) === null || _b === void 0 ? void 0 : _b.toString();
        this.likes = (_c = post.likes) === null || _c === void 0 ? void 0 : _c.toString();
        this.commentList = post.commentList;
    }
}
exports.PostViewModel = PostViewModel;
//# sourceMappingURL=post.viewmodel.js.map