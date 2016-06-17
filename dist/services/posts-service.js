var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var PostsService = (function () {
        function PostsService(http) {
            var _this = this;
            this.http = http;
            this.baseUrl = "http://jsonplaceholder.typicode.com/";
            this.postsUrl = "posts";
            this.singlePostUrl = "posts/";
            this.commentsUrl = "comments";
            this.singleCommentUrl = "comments/";
            this.http.configure(function (config) {
                config.useStandardConfiguration().withBaseUrl(_this.baseUrl);
            });
        }
        PostsService.prototype.posts = function () {
            return this.http.fetch(this.postsUrl).then(function (data) { return data.json(); });
        };
        PostsService.prototype.post = function (id) {
            return this.http.fetch(this.singlePostUrl + id).then(function (data) { return data.json(); });
        };
        PostsService.prototype.comments = function () {
            return this.http.fetch(this.commentsUrl).then(function (data) { return data.json(); });
        };
        PostsService.prototype.comment = function (id) {
            return this.http.fetch(this.singleCommentUrl).then(function (data) { return data.json(); });
        };
        PostsService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], PostsService);
        return PostsService;
    }());
    exports.PostsService = PostsService;
});
//# sourceMappingURL=posts-service.js.map
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvcG9zdHMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIiwic291cmNlcyI6WyJzZXJ2aWNlcy9wb3N0cy1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBT0E7UUFDSSxzQkFBb0IsSUFBZ0I7WUFEeEMsaUJBZ0NDO1lBL0J1QixTQUFJLEdBQUosSUFBSSxDQUFZO1lBc0I1QixZQUFPLEdBQVcsc0NBQXNDLENBQUM7WUFFekQsYUFBUSxHQUFXLE9BQU8sQ0FBQztZQUUzQixrQkFBYSxHQUFXLFFBQVEsQ0FBQztZQUVqQyxnQkFBVyxHQUFXLFVBQVUsQ0FBQztZQUVqQyxxQkFBZ0IsR0FBVyxXQUFXLENBQUM7WUE3QjNDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtnQkFDdEIsTUFBTSxDQUFDLHdCQUF3QixFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCw0QkFBSyxHQUFMO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELDJCQUFJLEdBQUosVUFBSyxFQUFVO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFFRCwrQkFBUSxHQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUVELDhCQUFPLEdBQVAsVUFBUSxFQUFVO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztRQUM1RSxDQUFDO1FBdEJMO1lBQUMsOEJBQVU7O3dCQUFBO1FBaUNYLG1CQUFDO0lBQUQsQ0FBQyxBQWhDRCxJQWdDQztJQWhDWSxvQkFBWSxlQWdDeEIsQ0FBQSJ9
