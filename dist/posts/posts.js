var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../services/posts-service'], function (require, exports, aurelia_framework_1, posts_service_1) {
    "use strict";
    var Posts = (function () {
        function Posts(postsService) {
            this.postsService = postsService;
            this.posts = [];
        }
        Posts.prototype.activate = function () {
            var _this = this;
            this.postsService.posts().then(function (data) { _this.posts = data; console.log(_this.posts); });
        };
        Posts = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [posts_service_1.PostsService])
        ], Posts);
        return Posts;
    }());
    exports.Posts = Posts;
});
//# sourceMappingURL=posts.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHMvcG9zdHMuanMiLCJzb3VyY2VSb290IjoiL3NyYyIsInNvdXJjZXMiOlsicG9zdHMvcG9zdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLQTtRQUNJLGVBQW9CLFlBQTBCO1lBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1lBUzlDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFQbkIsQ0FBQztRQUVELHdCQUFRLEdBQVI7WUFBQSxpQkFHQztZQURFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFLLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQztRQUN4RixDQUFDO1FBVEw7WUFBQyw4QkFBVTs7aUJBQUE7UUFZWCxZQUFDO0lBQUQsQ0FBQyxBQVhELElBV0M7SUFYWSxhQUFLLFFBV2pCLENBQUEifQ==
